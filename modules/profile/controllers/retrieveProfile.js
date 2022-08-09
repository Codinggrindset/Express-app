/* eslint-disable no-underscore-dangle */
const Joi = require('joi');
const { findUserWithEmail } = require('../../../database/repositories/user');
const { ApiError } = require('../../../utils/errors/apiError');

const retrieveOneProfile = async (mail) => {
  const schema = Joi.string().required().email({ minDomainSegments: 2 });

  const validateRequest = schema.validate(mail);

  if (validateRequest.error) {
    throw new ApiError(validateRequest.error.message, 400);
  }

  const user = await findUserWithEmail(mail);

  if (!user) {
    throw new ApiError('This user does not exist', 400);
  }

  return {
    success: true,
    message: 'Successfully fetched profile',
    data: {
      profile: {
        id: user._id,
        lastname: user.lastname,
        firstname: user.firstname,
      },
    },
  };
  // return profile;
};

module.exports = retrieveOneProfile;
