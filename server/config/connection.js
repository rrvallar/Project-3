const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err);
  }
);

module.exports = mongoose.connection;
