var cars=[];
function Car(color,model,miles)
{
this.color=color;
this.model=model ;
this.miles=miles;
this.run = function() {
  console.log(this.color + " " + this.model + " " + this.miles); 
}
}

//var myCar = new Car("bmw","2017","250");
//myCar.run();

 
    cars.push(new Car("marcides","2016","300"));
    cars.push(new Car("toyota","2015","260"));
    cars.push(new Car("bmw","2010","220")); 


for (var i=0;i<cars.length-1;i++) {
  cars[i].run();
    
}


//
//
//
