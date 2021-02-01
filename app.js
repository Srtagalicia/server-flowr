const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
require("./config/db.config");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN,
    })
  );
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404);
    res.send({errorMessage: 'not found'})
})

module.exports = app;
