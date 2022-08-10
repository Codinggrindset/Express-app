/* eslint-disable max-len */
const { verify } = require('../../../utils/jwt');
const { ApiError } = require('../../../utils/errors/apiError');
const { findUserWithId } = require('../../../database/repositories/user');

const checkToken = async (token) => {
  if (!token) {
    ApiError('Invalid or no authorization token provided', 401);
  }
  const result = await verify(token, process.env.TOKENSECRET, ApiError, findUserWithId);

  return result;
};

module.exports = checkToken;
