const express = require('express');
const { connectDb } = require('./database/connection');
const handleError = require('./middleware/errHandler');
const loginUser = require('./modules/authentication/routeHandlers/login');
const createNewUser = require('./modules/authentication/routeHandlers/signup');
const renderHomePage = require('./modules/homeRoute/routeHandlers/home');
require('dotenv').config();

const app = express();

app.use(express.json('3mb'));
app.get('/', renderHomePage);
app.post('/register', createNewUser);
app.post('/login', loginUser);

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
