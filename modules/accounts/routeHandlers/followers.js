const asyncWrapper = require('../../../utils/asyncWrapper');

const getOnesYouFollow = asyncWrapper((req, res) => {
  res.json({
    success: true,
    message: 'Here are the users that you follow',
    data: res.locals.thisUser.Following,
  });
});

module.exports = getOnesYouFollow;
