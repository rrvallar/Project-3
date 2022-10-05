const { User, Movie } = require('../models');

const resolvers = {
    Query: {
      movie: async () => {
        return Movie.find().sort({ createdAt: -1 });
      }
    }
  };
  
  module.exports = resolvers;