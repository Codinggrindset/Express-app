/* eslint-disable no-underscore-dangle */
const Joi = require('joi');
const { updateUserWithId } = require('../../../database/repositories/user');
const { makeSalt, hashPassword } = require('../../../utils/bcrypt');
const { ApiError } = require('../../../utils/errors/apiError');

const updatePassword = async (password, userId) => {
  const schema = Joi.string().min(8).required();

  const validateRequest = schema.validate(password);

  if (validateRequest.error) {
    throw new ApiError(validateRequest.error.message, 400);
  }

  const salt = await makeSalt;

  const newpassword = await hashPassword(password, salt);

  const check = await updateUserWithId(userId, { password: newpassword });
  console.log(check);
  const result = {
    success: true,
    message: 'password updated successfully',
  };
  return result;
};

module.exports = updatePassword;
