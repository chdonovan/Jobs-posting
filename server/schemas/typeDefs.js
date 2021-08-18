const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Job {
    _id: ID
    name: String
    description: String
    payment: Float
    category: Category
  }
  type User {
    _id: ID
    username: String
    email: String
    jobs: [Job]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    jobs(categroy: ID, name: String): [Job]
    job(_id: ID!): Job
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobs: [ID]!): Job
    updateUser(username: String, email: String, password: String): User
    updateJob(_id: ID!, payment: Int!): Job
    login(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;