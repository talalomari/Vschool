var findCharacter = function (paramstring) 
{
    var mainString = paramstring.split("");
	var isDublicate=[]; 
	 for(var i=0;i<mainString.length;i++)
		{
		   for(var j=0;i<mainString.length;j++)
		   {
			 
			  if(mainString[i] == mainString[j] && i>j)
				  {	
				  isDublicate.push(mainString[i]);
                         console.log("ggg");
				        continue;
				  }
		    }
		 }
	   
  
   console.log("The Misfits  :  "  + isDublicate.join(""));
	
	
	
}

  findCharacter('ggggggggggxllkjksjglkjdl');
