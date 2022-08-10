const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {},

  password: {},

  firstname: {},

  lastname: {},

  Questions: [
    {
      title: {},
      description: {},
    },
  ],

  Followers: [],

  Following: [],
});

const User = mongoose.model('QuoraDB', userSchema);

module.exports = { User };
