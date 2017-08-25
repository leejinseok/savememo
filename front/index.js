var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/bower', express.static(path.join(__dirname, 'bower_components')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes);

app.listen(8080, () => {
    console.log('Server is running');
});
