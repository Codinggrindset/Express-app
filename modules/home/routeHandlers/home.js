const asyncWrapper = require('../../../utils/asyncWrapper');

const renderHomePage = asyncWrapper((req, res) => {
  res.json({ success: true, message: 'Welcome to the home page' });
});

module.exports = renderHomePage;
