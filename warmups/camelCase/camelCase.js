var str= "helll how are you";
newstr=""
var index=str.indexOf(" ")
  if(str.indexOf(" ") !=-1)
      {
         console.log(str.substring(0,index));
         newstr +=str.substring(0,index);
          newstr+= str.substr(newstr.length+1,1).toLocaleUpperCase;
          console.log(newstr);
         
      }