var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let commentSchema = new Schema({
    content: {type: String, required: true},
    articleId: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
    author: String
}, {timestamps: true})

module.exports = mongoose.model('comment', commentSchema);