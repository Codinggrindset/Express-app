const asyncWrapper = require('../../../utils/asyncWrapper');
const checkToken = require('../controllers/confirmToken');

const verifyToken = asyncWrapper(async (req, res, next) => {
  const headerAuthorization = req.headers.authorization;
  const result = await checkToken(headerAuthorization);
  if (!result) {
    return res.status(401).json({
      success: false,
      message: 'You are not logged in, please login',
    });
  }
  res.locals.thisUser = result;
  return next();
});

module.exports = verifyToken;
