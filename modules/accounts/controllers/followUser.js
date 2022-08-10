const Joi = require('joi');
const { updateUserWithId, findUserWithId } = require('../../../database/repositories/user');
const { ApiError } = require('../../../utils/errors/apiError');

/* eslint-disable no-underscore-dangle */
const followOneUser = async (id, thisUser) => {
  const schema = Joi.string();

  const validateRequest = schema.validate(id);

  if (validateRequest.error) {
    throw new ApiError(validateRequest.error, 400);
  }

  const user = await findUserWithId(id);

  if (!user) {
    throw new ApiError('This user does not exist', 400);
  }
  updateUserWithId(id, {
    $push: {
      Followers: {
        id: thisUser._id,
        lastname: thisUser.lastname,
        firstname: thisUser.firstname,
      },
    },
  });
  updateUserWithId(thisUser._id, {
    $push: {
      Following: {
        id: user._id,
        lastname: user.lastname,
        firstname: user.firstname,
      },
    },
  });

  const result = { success: true, message: 'Follow request successful' };
  return result;
};

module.exports = followOneUser;
