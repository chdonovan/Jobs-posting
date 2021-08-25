import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;


export const ADD_JOB = gql`
  mutation addJob(
    $title: String
    $price: String
    $description: String
  ) {
    addJob(
      title: $title
      price: $price
      description: $description
    ) {
      _id
      title
      price
      description
    }
  }
`;