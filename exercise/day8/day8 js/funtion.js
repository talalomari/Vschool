

var sum = function(num1,num2){
    return num1 + num2;
   
    
};

 console.log(sum(4 ,8));

var greater = function(num1,num2,num3){
    
    if (num1 >num2 && num1 >num3)
    return num1;
    else if (num2>num1 && num2>num3)
         return num2;
    else
      return  num3;
    
};

 console.log (greater(10 ,2,5) );

var mod = function(num1){
    if (num1%2==0)
        return 'even' ;
        else  
      return 'odd' ;
};

 console.log (mod(5) );


var getlenght = function(str){
    if (str.length <=20)
        return str + " " + str;
    else  
          return str.substring(0,str.length/2);
   
        
};
    
 console.log (getlenght('hello  alskjfskdf sdkfjsf skfjsdf kfhow') );