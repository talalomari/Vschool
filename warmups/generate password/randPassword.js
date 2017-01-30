var passArray=[];

function rand(min,max) {
    return Math.floor(Math.random()* (max -min +1 ) +min)
}

      var laststring ='';
      var chars = "qwertyuioplkjhgfdsazxcvbnm";
      var Number = "1234567890";
      var speacial = "*&^%#$#@#$%";
      var capital = "QWERRTYJJKLOOHBHVCDSRTYUU";


        var randomstring = '';

    for (var i=0; i<2; i++) {
            var randChar = rand(1,chars.length-1);
            var randnum = rand(1,Number.length-1);
            var randspe = rand(1,speacial.length-1);
            var randcap = rand(1,capital.length-1);
              randomstring += chars.substring(randChar,randChar+1);
              randomstring += Number.substring(randnum,randnum+1);
         
              randomstring += speacial.substring(randspe,randspe+1);
           
              randomstring += capital.substring(randcap,randcap+1);
          
        }

console.log(randomstring)


