const asyncWrapper = require('../../../utils/asyncWrapper');
const logUserIn = require('../controllers/login');

const loginUser = asyncWrapper(async (req, res) => {
  const loginResponse = await logUserIn(req.body.email, req.body.password);
  return res.status(201).json(loginResponse);
});

module.exports = loginUser;
