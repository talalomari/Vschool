function addnum (a,b){
    return parseInt(a)+parseInt(b);
}

function subnum (a,b){
    return parseInt(a)*parseInt(b);
}

function minnum (a,b)
{
   return parseInt(a)-parseInt(b) ;
}

function divnum (a,b){
   return parseInt(a)/parseInt(b) ;
}

function operation (a,b,sign){
   return eval(a+sign+b) ;
}


module.exports ={add:addnum,
                 sub:subnum,
                 min:minnum,
                 div:divnum,
                 opr:operation
}
