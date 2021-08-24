const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Job, Response } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    jobs: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
    },
    job: async (parent, { _id }) => {
      return await Job.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'jobs.responses',
          populate: 'category',
        });

        // do we want to sort by created date of the job posting?
        user.job.sort((a, b) => b.createdDate - a.createdDate);

        return user;
      }
    },
    users: async () => {
      return User.find().select('-__v -password').populate('jobs');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('jobs');
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log(args, 'testbackend');
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addJob: async (parent, args, context) => {
      if (context.user) {
        const job = await Job.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { jobs: job._id } },
          { new: true }
        );

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await user.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('You are not logged in!');
    },
    updatedJob: async (parent, args, context) => {
      if (context.job) {
        return await job.findByIdAndUpdate(context.job._id, args, { new: true });
      }
      throw new AuthenticationError('You must be logged in!');
    },
    removeJob: async (parent, args, context) => {
      if (context.user) {
        const job = await Job.remove({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { jobs: job._id } },
          { new: true }
        );
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect login credentials!');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect login credentials!');
      }
      const token = signToken(user);
      return { token, user };
    },
    addResponse: async (parent, { jobId, responseBody }, context) => {
      if (context.user) {
        const updatedJob = await Job.findOneAndUpdate(
          { _id: jobId },
          { $push: { responses: { responseBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedJob;
      }

      throw new AuthenticationError('You must be logged in!');
    },
  },
};
module.exports = resolvers;
