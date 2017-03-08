var mongoose = require("mongoose");
var Student = require("./student.js")
mongoose.connect('mongodb://localhost/school');
var newstd = new Student({
    name: "ali",
    dob: {
        day: "15",
        month: "10",
        year: "1995"
    },
    isAlive: false
})

//newstd.save( function (err, new_student) {  
//if (err){
//    console.log(err)  
//}
//    else{
//       Student.find({}, function (err, students) {
//           if (err){
//       console.log(err)  
//}
//           else{
//              console.log(students); 
//           }
//       
//})
//    }
//});

Student.find({}, function (err, students) {
    if (err) {
        console.log(err)
    } else {
        console.log(students);
    }
})


//Student.findOne({_id: '58c047535a1ed4305cf22828'}, function (err, new_student) {  
//  new_student.remove( function (err) {
//   Student.find({}, function (err, students) {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log(students);
//    }
//})
//  });
//});


Student.findOne({_id: '58c046a5ef96d61cb001e166'}, function (err, std) {  
  std.name= "talal"
  std.save( function (err, data) {
   Student.find({}, function (err, students) {
    if (err) {
        console.log(err)
    } else {
        console.log(students);
    }
})

  });
});

