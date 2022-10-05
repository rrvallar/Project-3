// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Movie {
  _id: ID
  movieTitle: String
  createdAt: String
  username: String
  reactionCount: Int
}
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  savedMovie: [Movie]
  friends: [User]
}
type Query {
  users: [User]
  user(username: String!): User
  movies(username: String): [Movie]
  movie(_id: ID!): [Movie]
}
type Query {
  movies(username: String): [Movie]
}
type Mutation {
  login(email: String!, password: String!): User
  addUser(username: String!, email: String!, password: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;