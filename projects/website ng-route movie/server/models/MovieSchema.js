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
    }
})

module.exports = mongoose.model("Movie", MovieSchema);