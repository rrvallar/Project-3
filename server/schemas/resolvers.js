const { User, Movie } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// Resolvers Function Start//
const resolvers = {
  Query: {
    ///Connects to me query in typeDef//
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedMovie");
        // .populate('friends');
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //Gets All Users//
    users: async () => {
      return User.find().select("-__v -password").populate("savedMovie");
      // .populate('friends');
    },
    //Gets Single User//
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("savedMovie");
      // .populate('thoughts');
    },
    //Get All Movies//
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find(params).sort({ createdAt: -1 });
    },
    //Gets Movie By ID//
    movie: async (parent, { _id }) => {
      return Movie.findOne({ _id });
    },
  },
  /// --- Mutation Start --- ///
  Mutation: {
    //Creates New User//
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //Mutation for login//
    login: async (parent, { email, password }) => {
      /// ---- Const searches for email ---///
      const user = await User.findOne({ email });
      /// ---- if email not found it throws error ---///
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      /// ---- Const searches for correct password ---///
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    //Add A New Movie///
    addMovie: async (parent, args, context) => {
      if (context.user) {
        const movie = await Movie.create({
          ...args,
          username: context.user.username,
        });
        //Finds User By ID & Adds Movie//
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedMovie: movie } },
          { new: true }
        );

        return movie;
      }
      //Error If Not Logged In//
      throw new AuthenticationError("You need to be logged in!");
    },
    //Add friend by friendId, then added to friends array//
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
    //Error if not logged in//
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};
/// ---- Resolvers Function End ---- ////

module.exports = resolvers;
