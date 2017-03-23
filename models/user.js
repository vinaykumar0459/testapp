var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var db = require('../database/database');

var user = mongoose.Schema({
    name : String,
    username : { type: String },  
    email : { type: String },
    password : String,
    gender : String
});

module.exports = mongoose.model('apps', user);