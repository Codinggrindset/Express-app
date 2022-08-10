/* eslint-disable max-len */
const jwt = require('jsonwebtoken');

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.TOKENSECRET, { expiresIn: 3 * 24 * 60 * 60 });
  return token;
};

const verify = (token, secret, CustomError, findUserWithId) => jwt.verify(token, secret, async (err, decodedToken) => {
  if (err) {
    throw new CustomError('Invalid or no authorization token provided', 401);
  }

  const thisUser = await findUserWithId(decodedToken.id);
  return thisUser;
});

module.exports = { createToken, verify };
