const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieSchema = new Schema(
  {
    movieTitle: {
      type: String,
      required: 'You need to leave a Movie!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
