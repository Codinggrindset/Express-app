const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    default: false,
  },

  password: {
    type: String,
  },

  token: {
    type: String,
  },
});

const User = mongoose.model('Users Info', userSchema);

module.exports = { User };
