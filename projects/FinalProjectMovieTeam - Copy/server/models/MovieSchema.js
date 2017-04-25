var mongoose = require("mongoose");
var Schema = mongoose.Schema

var MovieSchema = new Schema({
    Title: {
        type: String,
        required: true
      },
    Actors: {
        type: String
    },
   
     Plot: {
        type: String
    },
     img: {
        type: String
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
    }]
})

module.exports = mongoose.model("Movie", MovieSchema);



