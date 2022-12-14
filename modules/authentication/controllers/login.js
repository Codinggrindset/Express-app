/* eslint-disable no-underscore-dangle */
const Joi = require('joi');
const { ApiError } = require('../../../utils/errors/apiError');
const { findUserWithEmail } = require('../../../database/repositories/user');
const { createToken } = require('../../../utils/jwt');
const { confirmPassword } = require('../../../utils/bcrypt');

const logUserIn = async (email, password) => {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required(),
  });

  const validateRequest = schema.validate({ email, password });

  if (validateRequest.error) {
    throw new ApiError(validateRequest.error.message, 400);
  }

  const user = await findUserWithEmail(email);

  if (!user) {
    throw new ApiError('Could not find user', 400);
  }
  const check = await confirmPassword(password, user.password);
  console.log('HEREEEE');
  if (!check) {
    throw new ApiError('Incorrect password entered', 400);
  }

  const token = createToken(user._id);

  return {
    success: true,
    message: 'Login successful',
    data: { token },
  };
};

module.exports = logUserIn;
