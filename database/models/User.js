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

  Following: [Object],
});

const User = mongoose.model('Dbs', userSchema);

module.exports = { User };
