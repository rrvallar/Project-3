import { gql } from '@apollo/client';

export const QUERY_MOVIES = gql`
query Movies {
  movies {
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
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      movies {
        _id
        movieTitle
        moviePoster
        createdAt
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;