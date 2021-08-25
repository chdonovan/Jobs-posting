const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type Job {
    _id: ID
    title: String
    description: String
    price: String
    location: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    job: Job
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addJob(
      title: String
      price: String
      description: String
      location: String
    ): Job

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


// const typeDefs = gql`
//   type Category {
//     _id: ID
//     name: String
//   }
//   type Job {
//     _id: ID
//     title: String
//     description: String
//     price: Float
//     category: Category
//     location: String
//     createdAt: String
//   }
//   type Response {
//     _id: ID
//     responseText: String
//     username: String
//     createdAt: String
//   }
//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     job: [Job]
//   }
//   type Auth {
//     token: ID
//     user: User
//   }
//   type Query {
//     categories: [Category]
//     jobs(category: ID, name: String): [Job]
//     job(_id: ID!): Job
//     user:(username: String!): User
//     users: [User]
//     me: User
//   }
//   type Mutation {
//     addUser(
//       firstName: String!
//       lastName: String!
//       email: String!
//       password: String!
//     ): Auth
//     addJob(job: [ID]!): Job
//     updateUser(firstName: String!, lastName: String! email: String, password: String): User
//     updateJob(_id: ID!, payment: Int!): Job
//     removeJob(_id: ID!): Job
//     login(
//       firstName: String!
//       lastName: String!
//       email: String!
//       password: String!
//     ): Auth
//   }
// `;

// module.exports = typeDefs;
