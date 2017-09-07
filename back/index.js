var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./api');

mongoose.connect("mongodb://dooly:aormfl123@ds119064.mlab.com:19064/savememo");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// MiddleWare
//
/**
 * Access-Control-Allow-Origin 문제 해결
 * @see https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
 */
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/api', api);
app.listen(3000, () => {
    console.log('Server is running');
});
