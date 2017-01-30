 var myclass=[
{name:"aaa",grade:52},
{name:"bbb",grade:20},
{name:"ccc",grade:100},
{name:"ddd",grade:20},
{name:"ddd",grade:70}];
        
for (var i=0;i<myclass.length;i++){
if(myclass[i].grade<=100 && myclass[i].grade >80){
   console.log(myclass[i].name + "  exelent" );
}
   else if(myclass[i].grade<=80 && myclass[i].grade >50){
   console.log(myclass[i].name + "  good" );
   }
      else  if(myclass[i].grade<=50 && myclass[i].grade >0){
   console.log(myclass[i].name + "  weak" );
      }
}
