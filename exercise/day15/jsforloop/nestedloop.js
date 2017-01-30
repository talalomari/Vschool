var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var arrylphabet=alphabet.split("");
var newarray=[];

for (var i=0;i<=people.length-1;i++) {
    newarray.push(people[i]);
    {  for(var j=0;j<=arrylphabet.length-1;j++)  
       newarray.push(arrylphabet[j]);
    }
  
     }
console.log( newarray.join(","));