var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    desciption: String,
    likes: {type: Number, default: 0},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema);