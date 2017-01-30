var readlineSync = require("readline-sync");
var PlayerName = readlineSync.question("Please Enter your name ?   ") ;
console.log ("\n******** Welcome " + PlayerName + " lets start the game ************\n\n" );

console.log ("some instruction for play the game\n Walking (w):  to walk in the game \n running (r):  to escape from the enemy\n attack (a) to attack the enemy \n\n\n");

// funtion to get random number between two numbers
 var tempEneme=[];
 var playerHealth=3000;

function getRand(min,max){
    
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// funtion to declare the Enimes and its properteis and methods
var Enimes = function(names) {
	this.CollectionOFEnemeies=[];
    this.EnemeName="";
    this.hitPoints=0;
    this.defense;
    this.generate=function() {
        for (var i=1; i<names.length+1;i++) {
        this.EnemeName=names[i-1];
        this.hitPoints=getRand(parseInt((60/i)),parseInt((66/i)));
        this.defense = this.hitPoints*2;
		this.CollectionOFEnemeies[i-1]={enemeName:this.EnemeName,hitPoints:this.hitPoints,defense:this.defense};
        }
}}

    

// call enime funtion to get the enime randomly
      var callEneme = function(playerAction) {	
	    var index= getRand(0,tempEneme.CollectionOFEnemeies.length-1);
 
     console.log(" the enemy is " + tempEneme.CollectionOFEnemeies[index].enemeName + "  hit Point is: " + tempEneme.CollectionOFEnemeies[index].hitPoints + " defense is:  " +   tempEneme.CollectionOFEnemeies[index].defense);
	if (playerAction=="w") {
		  console.log("Press run (r) to escape or attack (a) to fight \n" )
		  var result = readlineSync.question(" run (r) / attack (a):  ") ;
			  if (result.charCodeAt(0)==114) {
					fnRun(result.charCodeAt(0));
				 }
		
		    else if (result.charCodeAt(0)==97 ) {
			 fnAttack(tempEneme,index);
		           
			}
			else {
				  console.log("Please Press run (r) to escape or attack (a) to fight \n" )
				  callEnime(playerAction);
			}
		}
	else if (playerAction=="r") {
		 console.log("you can't run enime catch you, you have to attack \n" )
		  var result = readlineSync.question("press (a) to attack:  ") ;
		// here code for attack funtion
		 fnAttack(tempEneme,index);
	}
	    		 
		  }
	      
// call function walk 		  
var fnWalk= function(){
	var walk = readlineSync.question("Please Press (w) to  walk:  ") ;
if (walk.charCodeAt(0)==119) {
	if (getRand(1,2)==1) {
		callEneme("w");
	}
else {
	fnWalk();
	}
 }
	else {
	fnWalk();
	}
 }

// call funtion run  when the player decided to escape from enime

var fnRun= function(run) {
if (run==114) {
		if (getRand(1,2)==1) {
		callEneme("r");
			
		}
		else {
			
			console.log (" you are lucky you are successfully escape from the enemy \n \n");
			fnWalk();
			}
		}
	  else {
		  	console.log (" please press (r) to run or (a) to attack \n");
		    var result = readlineSync.question(" run (r) / attack (a):   ") ;
		  fnRun(result)
	  }	  
}




// call funtion attack 
var fnAttack= function(tempEneme,enemyPosition) {
     if (tempEneme.CollectionOFEnemeies.length=1){
         enemyPosition=0 
     }
        
         
        var enemyDefence=tempEneme.CollectionOFEnemeies[enemyPosition].defense;
         var enemyhit=tempEneme.CollectionOFEnemeies[enemyPosition].hitPoints;
         var enemyname=tempEneme.CollectionOFEnemeies[enemyPosition].enemeName;
		console.log( enemyname + "  Defense " + enemyDefence)
		var playerHit=getRand(1,100);
		console.log(" your hit power is: " + playerHit);
		if (enemyDefence< playerHit ) {
				console.log (" perfect the enemy is dead \n \n");
            tempEneme.CollectionOFEnemeies.splice(enemyPosition,enemyPosition);
          console.log(tempEneme.CollectionOFEnemeies);
            console.log (" your reward is increase your health \n ");
              
            if (tempEneme.CollectionOFEnemeies.length<=0)
                {
                  console.log (" perfect you are win \n \n");
                enemyPosition=0
                }
            
            playerHealth +=playerHealth + 25
             fnWalk();
			}
	     else {
    tempEneme.CollectionOFEnemeies[enemyPosition].defense= (enemyDefence-playerHit) ;
          enemyDefence= tempEneme.CollectionOFEnemeies[enemyPosition].defense
		console.log(" Enemy Name " + enemyname + " Enemy Defense "  + enemyDefence);
          playerHealth =  playerHealth - enemyhit;
             if (playerHealth<=0){
                 console.log("sorry you are lose bye bye")
             }
             else
                 {
           
            var result = readlineSync.question(" run (r) /or (a) to attack again:  ") ;
			  if (result.charCodeAt(0)==114) {
					fnRun(result.charCodeAt(0));
				 }
		
		    else if (result.charCodeAt(0)==97 ) {
			        fnAttack(tempEneme,enemyPosition);       
			}
                     
                 }
            
 }
}

// call funtion walk to start the game 
var startgame= function() {
	    var possibleName=["dragon","falcon","tiger"];
		 tempEneme = new Enimes(possibleName);
         tempEneme.generate();
          fnWalk();
}


// start game
startgame();
    