const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    jobs: async (parent, { category, name }) => {
      const params = {};
    },
  },
};

module.exports = resolvers;
