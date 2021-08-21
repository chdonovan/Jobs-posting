const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Job } = require('../models');

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
    jobs: async (parent, { _id }) => {
      return await Job.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'jobs.responses', 
          populate: 'category',
        });

        // do we want to sort by created date of the job posting?
        // user.job.sort((a, b) => b.createdDate - a.createdDate)

        return user;
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addJob: async (parent, { job }, context) => {
      if (context.user) {
        const newJob = new Job({ jobs});

        await User.findByIdAndUpdate(context.user._id, { $push: { job: newJob } });

        return newJob;
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await user.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('You are not logged in');
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
  },
};

module.exports = resolvers;
