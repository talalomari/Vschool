var Human= function(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
   this.show = function(){
        console.log(this.name + " " + this.age + " " + this.gender)
    }
}

var Computer= function(name,color,isLaptop){
    this.name=name;
    this.color=color;
    this.isLaptop=isLaptop;
    this.show = function(){  
        console.log(this.name + " " + this.color + " " + this.isLaptop);
    }
}


var Table= function(width,color,height){
    this.width =width;
    this.color=color;
    this.height=height;
}



var human= new Human("ali",20,"male");
human.show();


var computer =new Computer("hp" ,"black",1);
computer.show();


var table=function(widht,color,height) {
    
    console.log("the table width is:" + widht + " color: " + color );
}

table(100,"white",100);