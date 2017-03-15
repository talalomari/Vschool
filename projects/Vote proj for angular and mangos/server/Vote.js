var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VoteSchema = new Schema({
    title: {
        type: String,
        default: "your  post"
    },
    desc: {
        type: String,
        default: "your  description"
    },
    upVote: {
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0

    },
    comments: [{
        body: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],

});

module.exports = mongoose.model('Vote', VoteSchema);