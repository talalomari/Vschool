var readlineSync= require("readline-sync");

var dec={};
for (var i=0;i<10;i++){
var type = readlineSync.question(" 1 for search  2 for add new word:");
    if (type==1)
        {
         var searchtkey = readlineSync.question("please enter the key you want to search:");
          console .log(dec[searchtkey])  ;
            
        }
    else
        {
           var inputkey = readlineSync.question("please enter the key of the word:");
inputkey=inputkey.toLowerCase();
dec[inputkey];

var inputDesc = readlineSync.question("please enter the description:");
inputDesc=inputDesc.toLowerCase();
dec[inputkey]=inputDesc; 
} 
        }
    
    


//console.log(dec)





     