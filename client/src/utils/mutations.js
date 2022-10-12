import { gql } from "@apollo/client";

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
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
