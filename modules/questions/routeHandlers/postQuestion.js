const asyncWrapper = require('../../../utils/asyncWrapper');
const postOneQuestion = require('../controllers/postQuestion');

const postQuestion = asyncWrapper((req, res) => {
  const { title, description } = req.body;
  const { thisUser } = res.locals;
  const result = postOneQuestion(title, description, thisUser);
  res.status(201).json(result);
});

module.exports = postQuestion;
