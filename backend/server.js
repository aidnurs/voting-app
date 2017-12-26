'use strict';

var express=require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes.js');

//mongoose.connect(url);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var url = 'mongodb://test:test@ds133044.mlab.com:33044/voting';
mongoose.Promise = global.Promise;
mongoose.connect(url, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
routes(app);

var listener = app.listen(8000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
