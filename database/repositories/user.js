const { User } = require('../models/User');

const findUserWithEmail = (email) => User.findOne({ email });

const createUser = (email, password) => User.create({ email, password });

module.exports = { findUserWithEmail, createUser };
