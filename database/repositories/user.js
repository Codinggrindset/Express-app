const { User } = require('../models/User');

const findUserWithEmail = (email) => User.findOne({ email });

const createUser = (email, password, firstname, lastname) => User.create({
  email, password, firstname, lastname,
});

module.exports = { findUserWithEmail, createUser };
