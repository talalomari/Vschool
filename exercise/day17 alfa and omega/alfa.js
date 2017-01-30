var omega='\u03A9';
var alpha='\u0381';
var array=[];

for(var i=0;i<=10;i++) {
    
   for(var j=0;j<=10;j++) {
      
       if (j%2==0 )
           {
               array.push(omega);
           }
          
      else
           {
            array.push(alpha) ;  
           }  
        
   }
array.push('\n');
     
}
    console.log(array.join(" "));
 
    