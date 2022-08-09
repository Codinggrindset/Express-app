/* eslint-disable max-len */
const bcrypt = require('bcrypt');

const makeSalt = async () => bcrypt.genSalt();
const hashPassword = (password, salt) => bcrypt.hash(password, salt);
const confirmPassword = async (firstPassword, secondPassword) => bcrypt.compare(firstPassword, secondPassword);

module.exports = { makeSalt, hashPassword, confirmPassword };
