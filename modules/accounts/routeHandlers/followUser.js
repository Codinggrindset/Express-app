const asyncWrapper = require('../../../utils/asyncWrapper');
const followOneUser = require('../controllers/followUser');

const followUser = asyncWrapper(async (req, res) => {
  const { id } = req.body;
  const thisUser = res.locals.thisuser;
  const result = await followOneUser(id, thisUser);
  res.status(201).json(result);
});

module.exports = followUser;
