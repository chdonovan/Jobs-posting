const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addJob(job: [ID]!): Job
    updateUser(firstName: String!, lastName: String!, email: String, password: String): User
    updateJob(_id: ID!, payment: Int!): Job
    removeJob(_id: ID!): Job
    login(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
