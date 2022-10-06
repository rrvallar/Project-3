const { User, Movie } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedMovie')
          // .populate('friends');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('savedMovie')
        // .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('savedMovie')
        // .populate('thoughts');
    },
    /// Get all movies ///
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find(params).sort({ createdAt: -1 });
    },
    /// Get a movie by ID ///
    movie: async (parent, { _id }) => {
      return Movie.findOne({ _id });
    },
  },
/// Mutation Start ///
Mutation: {
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
}
};

module.exports = resolvers;
