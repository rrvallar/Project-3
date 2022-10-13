import { gql } from '@apollo/client';

export const QUERY_MOVIES = gql`
query movies($username: String!) {
  movies(username: $username) {
    _id
    movieTitle
    createdAt
    username
  }
}
  
`;
export const QUERY_MOVIE = gql`
  query movie($id: ID!) {
    movie(_id: $id) {
      _id
      movieTitle
      createdAt
      username
    }
  }
`;