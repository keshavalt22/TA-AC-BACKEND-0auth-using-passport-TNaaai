var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);