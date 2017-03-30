var mongoose= require("mongoose");
var Schema= mongoose.Schema;
var studentSchema= new Schema({
    name:String,
    dob:{
        day:String,
        month:String,
        year:String
    },
    isAlive:Boolean,
    date:Date
    
});
    
module.exports = mongoose.model('Student', studentSchema);  
    
