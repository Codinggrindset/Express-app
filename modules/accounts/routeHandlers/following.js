const asyncWrapper = require('../../../utils/asyncWrapper');

const getUrFollowers = asyncWrapper((req, res) => {
  res.json({
    success: true,
    message: 'Here are the users that follow you',
    data: res.locals.thisUser.Followers,
  });
});

module.exports = getUrFollowers;
