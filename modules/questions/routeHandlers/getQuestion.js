const asyncWrapper = require('../../../utils/asyncWrapper');
const getListOfQuesions = require('../controllers/getQuestion');

const getQuestions = asyncWrapper((req, res) => {
  const { thisUser } = res.locals;
  const result = getListOfQuesions(thisUser);
  res.json(result);
});

module.exports = getQuestions;
