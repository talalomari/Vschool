var readlineSync= require("readline-sync");
var operation = require("./calc.js"); 
var newStr=""
var arr = [];

function getRand(min,max){
    
    return Math.floor(Math.random() * (max - min +1)) + min;
}


for(var x = 0; x < 10; x++){
    arr[x] = [];    
    for(var y = 0; y < 10; y++){ 
        arr[x][y] = " X ";
        newStr+=arr[x][y];
      
    }
    newStr+="\n"
      console.log(newStr);
    newStr="";
}


var firstnum = readlineSync.question("first number: ");
var secondnum = readlineSync.question("second number: ");
   arr[parseInt(firstnum)][parseInt(secondnum)]=" 0 "
   
   for(var x = 0; x < 10; x++){ 
    for(var y = 0; y < 10; y++){ 
      
        newStr+=arr[x][y];
      
    }
    newStr+="\n"
    console.log(newStr);
    newStr="";
}


arr[firstnum][secondnum]=0;




 


     