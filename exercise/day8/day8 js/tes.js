var quad = function(a,b,c) {
   var root = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    var x;
    var x1;
    if (root==0) {
      console.log("have one solution" , -b /(2*a));
    } else if (root>0) {
       x = (-b + Math.sqrt(root))/2*a;
       x1 = (-b - Math.sqrt(root))/2*a;
         console.log("have two solution" , x,x1);
    } else{
         console.log("no solution" ,  x,x1);
        
    }
    
    };
       
quad (2,5,1);
    




