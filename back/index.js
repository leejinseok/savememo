var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./api');

mongoose.connect("mongodb://localhost/savememo");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// MiddleWare
app.use('/api', api);
app.listen(3000, () => {
    console.log('Server is running');
});
