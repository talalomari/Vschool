let name = "jacob";
console.log(name);
// new variable is let instead of var
for (let i=0 ;i<=5;i++){
    console.log(i);
}


// new variable is const
// very importatnt note is 
// in const you can change variable passed by ref but u cant change variable passed by value
const app={};
app.name="talal";

console.log(app);


// in funtion es6 

function Person(name="ahmad",age=9){
    this.name=name;
    this.age=age;
    
}

let jacob = new Person("jacob",19);
console.log(jacob);

let ahmad= new Person();
console.log(ahmad);




//es5 old code
var name="talal";
var age=4;

var talal={
    name:name,
    age:age}
}

//es5 new code

let name="talal";
let age=4;
let talal={
    name,
    age
}


// es5 old code
var name="subbos";
var hellostring="hello " + name + " " + "how are you" ;
console.log(hellostring);




// es6 

let name="coco";
let hellostring='i am in love 
with the ${name}';
console.log(hellostring);


// old es5 code
var array=[1,2,3]
for (var i=0; i<array.length; i++){
    array[i];
    
}

array(...)






