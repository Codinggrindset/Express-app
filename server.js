const express = require('express');
const { connectDb } = require('./database/connection');
const errHandler = require('./middleware/errHandler');
const renderHomePage = require('./modules/homeRoute/routeHandlers/home');
require('dotenv').config();

const app = express();

app.get('/', renderHomePage);

app.use(errHandler);

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
