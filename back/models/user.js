var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    pwd: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
