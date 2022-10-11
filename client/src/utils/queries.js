import { gql } from '@apollo/client';

export const QUERY_MOVIES = gql`
query Movies {
  movies {
    _id
    movieTitle
    moviePoster
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
      moviePoster
      createdAt
      username
    }
  }
`;