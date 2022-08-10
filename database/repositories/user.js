const { User } = require('../models/User');

const findUserWithEmail = (email) => User.findOne({ email });

const createUser = (email, password, firstname, lastname) => User.create({
  email, password, firstname, lastname,
});

const findUserWithId = (id) => User.findById(id);

const updateUserWithId = (id, a) => User.findByIdAndUpdate(id, a, { new: true });

module.exports = {
  findUserWithEmail, createUser, findUserWithId, updateUserWithId,
};
