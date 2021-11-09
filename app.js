var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

module.exports = app;
