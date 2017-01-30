$("#get").click(function() {

var xhr = new XMLHttpRequest();
var number= $("#SearchNumber").val();

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
      $("#PokName").val(data.name);
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};


xhr.open("GET", "http://swapi.co/api/people/"+ number + "/", true);
xhr.send();
});