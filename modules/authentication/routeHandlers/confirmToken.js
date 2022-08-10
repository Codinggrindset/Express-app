const asyncWrapper = require('../../../utils/asyncWrapper');
const { ApiError } = require('../../../utils/errors/apiError');
const checkToken = require('../controllers/confirmToken');

const verifyToken = asyncWrapper(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new ApiError('Invalid or no authorization token provided', 401);
  }
  const [, token] = req.headers.authorization.split(' ');
  const result = await checkToken(token);
  if (!result) {
    return res.status(401).json({
      success: false,
      message: 'You are not logged in, please login',
    });
  }
  res.locals.thisuser = result;
  return next();
});

module.exports = verifyToken;
