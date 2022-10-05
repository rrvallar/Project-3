const { User, Movie } = require("../models");

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
    /// Get movies for user by username ///
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find(params).sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async () => {},
  },
};

module.exports = resolvers;
