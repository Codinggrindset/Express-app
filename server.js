const express = require('express');
const errHandler = require('./middleware/errHandler');
const renderHomePage = require('./modules/homeRoute/routeHandlers/home');
require('dotenv').config();

const app = express();

app.get('/', renderHomePage);

app.use(errHandler);

const runServer = () => {
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
