function getrand(min,max){
    
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var Enimes = function(names){
    var names= names;
    this.EnimeName="";
    this.hitPoints=0;
    this.defense;
    this.generate=function(){
        var index= getrand(0,names.length-1);
        this.EnimeName=names[index];
        if (this.EnimeName==="Ancient Dragon"){
             this.hitPoints=getrand(80,100);
             this.defense= this.hitPoints *3
        }
        else if (this.EnimeName==="Prowler"){
             this.hitPoints=getrand(50,79);
             this.defense= this.hitPoints *3
             }
        else
            {
                this.hitPoints=getrand(20,49);
                 this.defense= this.hitPoints *3
            }
    };
        }
           
    

var possibleName=["Ancient Dragon","Prowler","Mighty Grunt"];

for (var i=0; i<5;i++){
    var tempEnime = new Enimes(possibleName);
    tempEnime.generate();
    console.log(tempEnime.EnimeName + " " + tempEnime.hitPoints + " " + tempEnime.defense);
}




