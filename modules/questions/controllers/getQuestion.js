const getListOfQuesions = (thisUser) => {
  const data = thisUser.Questions;
  const result = { success: true, message: 'here are all your questions', data };
  return result;
};

module.exports = getListOfQuesions;
