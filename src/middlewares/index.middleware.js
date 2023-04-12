const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const asyncError = require('./errors.middleware');

require('../config/database.config')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());


  app.use(asyncError);
};