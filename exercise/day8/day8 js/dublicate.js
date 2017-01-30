var findCharacter = function (paramstring) 
{
    var mainString = paramstring.split("");
   	var nonDublicate=[];
	var isDublicate=[]; 
	 for(var i=0;i<mainString.length;i++)
		{
		   for(var j=0;i<mainString.length;j++)
		   {
			 
			  if(mainString[i] == mainString[j] && i>j)
				  {	
				  isDublicate.push(mainString[i]);
				 break;
				  }
			   
			 else if(mainString[i] != mainString[j]  && i<j)
				  {	
					 nonDublicate.push(mainString[i]); 
					   break;
				  }
		    }
		 }
	   
   console.log("No duplicates:  " + nonDublicate.join(""));
   console.log("The Misfits  :  "  + isDublicate.join(""));
	
	
	
}

  findCharacter('bookkeeper larry');
