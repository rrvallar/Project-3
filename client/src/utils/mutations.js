import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      movieTitle
      moviePoster
      createdAt
      username
      {
        _id
      }
    }
  }
`;