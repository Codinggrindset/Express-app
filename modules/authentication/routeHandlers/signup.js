const asyncWrapper = require('../../../utils/asyncWrapper');
const { registerUser } = require('../controllers/signup');

const createNewUser = asyncWrapper(async (req, res) => {
  const signupResponse = await
  registerUser(req.body.email, req.body.password, req.body.firstname, req.body.lastname);
  return res.json(signupResponse);
});

module.exports = createNewUser;
