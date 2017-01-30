var vowelCounter=0
var constCounter=0
var getVouwels= function(word) {
    for (i=0;i<word;i++){
         if(word[i].indexOf("a")||word[i].indexOf("e")||word[i].indexOf("i")||word[i].indexOf("y")||word[i].indexOf("u"))
       {
           vowelCounter+=1;
       } else
           {
              constCounter+=1 
           }
       
    }  
}
console.log("the vowel number is:" + vowelCounter)
console.log("the vowel number is:" + constCounter)