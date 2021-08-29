import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      jobCount
      jobs {
        _id
        title
      }
    }
  }
`;

export const QUERY_JOBS = gql`
  query {
    jobs {
      _id
      title
      description
      firstName
      lastName
      price
    }
  }
`;