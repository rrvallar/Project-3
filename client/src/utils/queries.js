import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query movies($username: String) {
    movies(username: $username) {
      _id
      movieTitle
      createdAt
      username
      }
    }
  
`;