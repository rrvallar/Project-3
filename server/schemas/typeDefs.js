// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Movie]
    friends: [User]
  }

  type Movie {
    _id: ID
    movieTitle: String
    createdAt: String
    username: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    movies(username: String): [Movie]
    movie(_id: ID!): [Movie]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
