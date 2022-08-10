const express = require('express');
const { connectDb } = require('./database/connection');
const handleError = require('./middleware/errHandler');
const getOnesYouFollow = require('./modules/accounts/routeHandlers/followers');
const getUrFollowers = require('./modules/accounts/routeHandlers/following');
const followUser = require('./modules/accounts/routeHandlers/followUser');
const verifyToken = require('./modules/authentication/routeHandlers/confirmToken');
const loginUser = require('./modules/authentication/routeHandlers/login');
const createNewUser = require('./modules/authentication/routeHandlers/signup');
const renderHomePage = require('./modules/home/routeHandlers/home');
const changePassword = require('./modules/password/routeHandlers/changePassword');
const retrieveProfile = require('./modules/profile/routeHandlers/retrieveProfile');
const postQuestion = require('./modules/questions/routeHandlers/postQuestion');
require('dotenv').config();

const app = express();

app.use(express.json('3mb'));
app.get('/', renderHomePage);
app.post('/auth/register', createNewUser);
app.post('/auth/login', loginUser);

app.use(verifyToken);
app.post('/auth/password', changePassword);
app.get('/search/accounts', retrieveProfile);
app.post('/accounts/follow', followUser);
app.get('/accounts/following', getUrFollowers);
app.get('/accounts/followers', getOnesYouFollow);
app.post('/questions', postQuestion);

app.use(handleError);

const runServer = () => {
  connectDb(process.env.MONGO_URL)
    .then(() => console.log('connected to the db'))
    .catch(() => {
      process.exitCode = 1;
      return process.exit();
    });
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
