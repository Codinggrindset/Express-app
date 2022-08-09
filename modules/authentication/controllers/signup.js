const Joi = require('joi');
const { ApiError } = require('../../../utils/errors/apiError');
const {
  findUserWithEmail,
  createUser,
} = require('../../../database/repositories/user');
const { createToken } = require('../../../utils/jwt');
const { makeSalt, hashPassword } = require('../../../utils/bcrypt');

const registerUser = async (email, password, firstname, lastname) => {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string()
      .min(8)
      .required()
      .regex(/^[a-zA-Z0-9]*$/),
    firstname: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9]*$/),
    lastname: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9]*$/),
  });

  const requestValidator = schema.validate({
    email,
    password,
    firstname,
    lastname,
  });

  if (requestValidator.error) {
    throw new ApiError(requestValidator.error.message, 400);
  }

  const user = await findUserWithEmail(email);

  if (user) {
    throw new ApiError('User already exists', 400);
  }

  const salt = await makeSalt();
  const hashedPassword = await hashPassword(password, salt);
  const savedUser = await createUser(email, hashedPassword, firstname, lastname);
  // eslint-disable-next-line no-underscore-dangle
  const token = createToken(savedUser._id);

  return {
    success: true,
    message: 'Successfully created account',
    data: { token },
    user: savedUser,
  };
};

module.exports = { registerUser };
