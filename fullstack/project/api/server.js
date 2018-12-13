'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(500).send({ err: err.message })
});

module.exports = app;
