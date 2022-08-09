const express = require('express');
const renderHomePage = require('./modules/homeRoute/routeHandlers/home');
require('dotenv').config();

const app = express();

app.get('/', renderHomePage);

const runServer = () => {
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
