var dubicate = function(mystring){
  var myarray= mystring.split("");
    var dublicatarr=[];
  
   
  
    for (var i=0;i<myarray.length;i++)
      {
          for(var j=0;j<myarray.length;j++)
              {
        if (myarray[i]==myarray[j] && i!=j)
            {
           dublicatarr.push(myarray[j]);
         
               
            }
                 
            }
              }
      
   //console.log(dublicatarr);
    // console.log(nodublicatarr);
    
   
   // return dublicatarr;
    
 
}
 
dubicate("hellooh");
