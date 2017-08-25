var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes);

app.listen(8080, () => {
    console.log('Server is running');
});
