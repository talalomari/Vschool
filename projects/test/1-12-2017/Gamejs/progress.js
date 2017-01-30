var ProgressBar = require('progress');
console.log(ProgressBar)
var green = '\u001b[42m \u001b[0m';
var red = '\u001b[41m \u001b[0m';
var bar = new ProgressBar('  [:bar :current/:total]', {
  complete: green,
  incomplete: red,
  total: 100
});

var id = setInterval(function (){
  bar.tick();
  if (bar.complete) {
    clearInterval(id);
  }
}, 10);