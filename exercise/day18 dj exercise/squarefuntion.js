$( ".Sqare" ).css("background-color","orange");

$( ".Sqare" ).css("height","200px");
$( ".Sqare" ).css("width","200px");
$( ".Sqare" ).hover(function(){
 $( ".Sqare" ).css("background-color","yellow");
});


$( ".Sqare" ).click(function(){
$( ".Sqare" ).css("background-color","red");
});

$( ".Sqare" ).dblclick(function(){
$( ".Sqare" ).css("background-color","green");
});

$( ".Sqare" ).mouseleave(function(){
$( ".Sqare" ).css("background-color","orange");
});

$( ".Sqare" ).keypress(function(event){
    console.log("hello")
    if ( event.keyCode == 71 ) {
  $( ".Sqare" ).css("background-color","green");
  }
    

});
