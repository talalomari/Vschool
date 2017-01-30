var readlineSync = require("readline-sync");
var phrase = readlineSync.question("Please enter any word:  ") ;
var phrase='slimy smelly solution'
var str=""

for (var i=0 ;i<phrase.length-1;i++) {
  var count=0;
        for (j=0;j<phrase.length-1;j++){
        if  (phrase.charAt(i)==phrase.charAt(j)) {
             count+=1; 
           
    }
  
     
   }
       str+=str
       console.log(str);
       if (str.charAt(i)!=phrase.charAt(i))
           {
                console.log(phrase.charAt(i) + ":" + count );
           }
      
      
     
    
       
}
    