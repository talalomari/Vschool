var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm
if (hr <12)
    {
       ampm='am' ;
    }
   else
    {
    ampm='pm';
    hr=hr-12;
    }
    
    

var date = d.getDate();




console.log( day + " " + hr + ":" + min + ampm )