const asyncWrapper = require('../../../utils/asyncWrapper');
const retrieveOneProfile = require('../controllers/retrieveProfile');

const retrieveProfile = asyncWrapper(async (req, res) => {
  const { email } = req.query;
  const response = await retrieveOneProfile(email);
  return res.json(response);
});

module.exports = retrieveProfile;
