
var bears = require('./Bear');
var animation = require('ascii-animation');
var clear = '\033[2J'; 
console.log("for testing");

var dancingBear = function(condition, callback){
    animation.animate(bears, condition, callback).bold();
}

module.exports = dancingBear;