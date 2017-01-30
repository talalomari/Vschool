var readlineSync= require("readline-sync");
var greeting = readlineSync.question("how to greeting someone:");
console.log("how to greeting someone:" + greeting.toUpperCase());


console.log("length is :" + greeting.length);

var age = readlineSync.question("how old are you:");
console.log("your age is  :".concat(age));

var message = readlineSync.question("enter any message you want more than 20:");
if (message.length>20)
    {
      console.log(message.substring(20,message.length));      
    }
    else
        {
              console.log(""); 
        }

var indexofchar = readlineSync.question("please enter the index you want start from:");

var myString=message.substring(0,indexofchar);
 console.log(message);

var addstring = readlineSync.question("enter any message ");
console.log(myString + addstring + message.substring(indexofchar + addstring.length,message.length) );