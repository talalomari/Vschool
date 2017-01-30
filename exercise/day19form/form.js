$("#submit" ).click(function() {
    var firstName=$("#FirstName" ).val();
    var LastName=$("#LastName" ).val();
    var age=$("#Age" ).val();
    var gender =$('input[name=radio]:checked').val();
    
    var location= $( "#selLocation option:selected" ).text();
    
 var locationthemes1= $('input[name="locationthemes1"]:checked').val();
 var  locationthemes2=$('input[name="locationthemes2"]:checked').val();
var  locationtheme3=$('input[name="locationthemes3"]:checked').val();
    
  alert(firstName  + "  "  + LastName + " " + age + " \n " + gender + " "  + location + " \n " + locationthemes1 + " " +locationthemes2 + " " + locationtheme3);
});