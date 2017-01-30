var ProgressBar = require('progress');
var readlineSync = require("readline-sync");


var green = '\u001b[42m \u001b[0m';
var red = '\u001b[41m \u001b[0m';
var colors = require('colors')

var bar = new ProgressBar('[:bar :current/:total]', {
  complete: green,
  incomplete: red,
  total: 100
});





var id = setInterval(function (){
  bar.tick();
  if (bar.complete) {
      clearInterval(id);
      setup();
  }
}, 10);


var PlayerName;
function setup() {
     PlayerName = readlineSync.question("Please Enter your name ?  \n ") ;
    console.log (" \n******** " + colors.green( "Welcome " + PlayerName + " lets start the game") + " ************\n\n" );
    console.log ("some instruction for play the game\n" + colors.yellow("walk") +  "  to walk in the game \n" +  colors.yellow("run") +  "  to escape from the enemy\n"  + colors.yellow("attack") +   "  to attack the enemy\n" +  colors.yellow("show") + " to show your status and enimies \n\n\n");
    // start game
    startgame();
}


// funtion to get random number between two numbers
 var tempEneme=[];
 var playerHealth=100;
var Rewards=["knife","health","gun"];
var playerRewards="";

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

     console.log("  enemy Name: " + colors.red(tempEneme.CollectionOFEnemeies[index].enemeName) + "  hit Point is: " + colors.red(tempEneme.CollectionOFEnemeies[index].hitPoints) + " defense is:  " +   colors.red(tempEneme.CollectionOFEnemeies[index].defense));
	if (playerAction=="w") {
		  var result = readlineSync.question(" run to escape  / attack  to fight:  ") ;
		      if (result=="show") {
				  show();
				  callEneme(playerAction)
			  }
			  else if (result=="run") {
					fnRun("r");
				 }
		
		    else if (result=="attack" ) {
			 fnAttack(tempEneme,index);
		           
			}
			else {
				  callEneme(playerAction);
			}
		}
	else if (playerAction=="r") {
		 console.log("\n you can't run enime catch you, you have to attack \n" )
		// here code for attack funtion
		 fnAttack(tempEneme,index);
	       }
		  else {
			  fnAttack(tempEneme,index);
			  
		  }
	    		 
		  }
	      
// call function walk 		  
var fnWalk= function(){
	var walk = readlineSync.question("Please Press walk to  walk:  ") ;
if (walk=="show"){
	show();
	fnWalk();
	}
	
else if (walk=="walk") {
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
if (run=="r") {
		if (getRand(1,2)==1) {
		callEneme("r");
			
		}
		else {
			
			console.log ( colors.green(" you are lucky you are successfully escape from the enemy") +" \n \n");
			fnWalk();
			}
		} 
	  }	  



// call funtion attack 
var fnAttack= function(tempEneme,enemyPosition) {
    
         var enemyDefence=tempEneme.CollectionOFEnemeies[enemyPosition].defense;
         var enemyhit=tempEneme.CollectionOFEnemeies[enemyPosition].hitPoints;
         var enemyname=tempEneme.CollectionOFEnemeies[enemyPosition].enemeName;
			    
		console.log( colors.red(enemyname) + "  Defense " + colors.red(enemyDefence));
		var playerHit=getRand(1,100);
		console.log(" your hit power is: " + colors.red(playerHit));
		if (enemyDefence< playerHit ) {
				console.log (colors.green(" perfect the enemy is dead") + "\n \n");
            tempEneme.CollectionOFEnemeies.splice(enemyPosition,1);
           playerRewards+= " " + Rewards[getRand(0,2)];
              
            if (tempEneme.CollectionOFEnemeies.length<=0)
                {
                  console.log (colors.green(" perfect you are win")+ "\n \n");
                }
			else{
					playerHealth +=playerHealth + 25
             		fnWalk();
			}
            
         
			}
	     else {
          tempEneme.CollectionOFEnemeies[enemyPosition].defense= (enemyDefence-playerHit) ;
          enemyDefence= tempEneme.CollectionOFEnemeies[enemyPosition].defense
		   console.log(" Enemy Name " + enemyname + " Enemy Defense "  + enemyDefence);
          playerHealth =  playerHealth - enemyhit;
             if (playerHealth<=0){
                 console.log(colors.red("sorry you are lose bye bye"));
             }
             else
                 {
           
            var result = readlineSync.question(" run to escape /  attack to fight  again:  ") ;
					 if (result=="show"){
	                show();
	                fnRun(result)
					 }
			   
			 else  if (result=="run") {
					fnRun("r");
				 }
		
		    else if (result=="attack") {
			        fnAttack(tempEneme,enemyPosition);       
			}
					 else{
						 fnAttack(tempEneme,enemyPosition); 
					 }
                     
                 }
            
 }
				   }
	


var show= function()
{
	 console.log("\n Player name is : " + colors.green(PlayerName) + "  health "  + colors.green(playerHealth) + " Rewards is:  " + colors.green(playerRewards) + "\n");
	 console.log( "you  still have to face this enemies: \n");
	 console.log( tempEneme.CollectionOFEnemeies);	 
}

// call funtion walk to start the game 
var startgame= function() {
	    var possibleName=["dragon","falcon","tiger"];
		 tempEneme = new Enimes(possibleName);
         tempEneme.generate();
          fnWalk();
}


    


