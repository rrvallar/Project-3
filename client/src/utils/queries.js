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

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    savedMovie {
      _id
      movieTitle
      createdAt
      username
    }
  }
}
`;

export const QUERY_ME = gql `
query Query {
  me {
    _id
    username
    savedMovie {
      _id
      movieTitle
      createdAt
      username
    }
  }
}
`;