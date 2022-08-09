const jwt = require('jsonwebtoken');

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.TOKENSECRET, { expiresIn: 3 * 24 * 60 * 60 });
  return token;
};

module.exports = { createToken };
