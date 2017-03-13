var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   desc: {
        type: String,
        required: true
    },
     upVote: {
        type: Number,
        required: true
    },
      downVote: {
        type: Number,
        required: true
    },
    comments:[]
    
    
});

module.exports = mongoose.model('Vote', VoteSchema);