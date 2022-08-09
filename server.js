const express = require('express');
require('dotenv').config();

const app = express();

const runServer = () => {
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
