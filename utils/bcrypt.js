const bcrypt = require('bcrypt');

const makeSalt = async () => bcrypt.genSalt();
const hashPassword = (password, salt) => bcrypt.hash(password, salt);

module.exports = { makeSalt, hashPassword };
