import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
    mutation movie($id: ID!) {
        movie(_id: $id) {   
            _id
            movieTitle
            createdAt
            username
    }
  }
`;