var readlineSync= require("readline-sync");
var operation = require("./calc.js"); 
var firstnum = readlineSync.question("first number: ");
var secondnum = readlineSync.question("second number: ");
var operator = readlineSync.question("second number: ");

console.log(operation.opr(firstnum,secondnum,operator));



     