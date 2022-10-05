const { User, Movie } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    /// get all users ///
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("movieTitle");
    },
    /// get a user by username ///
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("movieTitle");
    },
    /// Get all movies ///
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find(params).sort({ createdAt: -1 });
    },
    /// Get a movie by ID ///
    movies: async (parent, { _id }) => {
      return Movie.findOne({ _id });
    },
  },
/// Mutation Start ///
  Mutation: {
    /// Mutation For Adding User ///
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    }
  },
};

module.exports = resolvers;
