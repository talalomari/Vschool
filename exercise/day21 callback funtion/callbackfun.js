//var person=function(name){
//    this.name=name;
//    this.sleep=function(){
//        console.log("i am sleeping")
//    }
//    this.wake =function(task){
//        console.log("i am awake");
//        task();
//        
//    }
//    this.dokungFu=function(){
//        console.log("sweekts kiks");
//    }
//}
//
//var jameel= new person("jameel");
//jameel.sleep();
//jameel.wake(jameel.dokungFu);

var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(ac,x) {
    console.log("I turn the key on in the " + this.carType + " car");
      ac(x,this);
  };
  this.drive = function(speed , object) {
    console.log("I am driving at " + speed + " kph" + " in the " + object.carModel + " " + object.carType + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.drive,100)


//Using the code above write a callback function in
//Start to call once the car has been started