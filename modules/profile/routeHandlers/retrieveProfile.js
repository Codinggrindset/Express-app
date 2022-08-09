const asyncWrapper = require('../../../utils/asyncWrapper');
const retrieveOneProfile = require('../controllers/retrieveProfile');

const retrieveProfile = asyncWrapper(async (req, res) => {
  const { mail } = req.params;
  const response = await retrieveOneProfile(mail);
  return res.json(response);
});

module.exports = retrieveProfile;
