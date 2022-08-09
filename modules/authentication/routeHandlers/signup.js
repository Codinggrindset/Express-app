const asyncWrapper = require('../../../utils/asyncWrapper');
const { registerUser } = require('../controllers/signup');

const createNewUser = asyncWrapper(async (req, res) => {
  const {
    email, password, firstname, lastname,
  } = req.body;
  const signupResponse = await
  registerUser(email, password, firstname, lastname);
  return res.status(201).json(signupResponse);
});

module.exports = createNewUser;
