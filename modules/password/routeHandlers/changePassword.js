/* eslint-disable no-underscore-dangle */
const asyncWrapper = require('../../../utils/asyncWrapper');
const updatePassword = require('../controllers/changePassword');

const changePassword = asyncWrapper(async (req, res) => {
  const { password } = req.body;
  const userId = res.locals.thisUser._id;
  const response = await updatePassword(password, userId);
  res.status(201).json(response);
});

module.exports = changePassword;
