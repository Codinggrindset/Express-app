const Joi = require('joi');
const { updateUserWithId } = require('../../../database/repositories/user');
const { ApiError } = require('../../../utils/errors/apiError');

/* eslint-disable no-underscore-dangle */
const postOneQuestion = (title, description, thisUser) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  const validateRequest = schema.validate({ title, description });

  if (validateRequest.error) {
    throw new ApiError(validateRequest.error, 400);
  }
  updateUserWithId(thisUser._id, {
    $push: { Questions: { title, description } },
  });
  const result = { success: true, message: 'Question posted successfully' };
  return result;
};

module.exports = postOneQuestion;
