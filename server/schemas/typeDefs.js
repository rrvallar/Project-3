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
type Query {
 movie: [Movie]
}
`;

// export the typeDefs
module.exports = typeDefs;