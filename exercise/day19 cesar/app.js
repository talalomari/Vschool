var readlineSync= require("readline-sync");
var input = readlineSync.question("what phase yould you like to encrypt:");
input=input.toLowerCase();
var shift = readlineSync.question("How many letters would you like to shift:");
shift=parseInt(shift);
var array=[];

for (var i=0;i<input.length;i++)
    {
                   
      array.push (input.charCodeAt(i) ); 
    }

    for(var i=0;i<input.length;i++)
      {
            if ((array[i] >= 97) && (array[i] <= 122))
			//c = String.fromCharCode(((array[i] - 97 + shift) % 26) + 97);
            {
                console.log(String.fromCharCode(((array[i] - 97 + shift) % 26) + 97));  
            } else 
            {
                
                console.log(String.fromCharCode(array[i]+shift))  ;
            }


      }
     


     