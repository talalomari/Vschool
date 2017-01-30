var request = require('request');

//Lets try to make a HTTPS GET request to modulus.io's website.
//All we did here to make HTTPS call is changed the `http` to `https` in URL.
request('http://pokeapi.co/api/v1/pokemon/25/', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    //All is good. Print the body
    //console.log(body); // Show the HTML for the Modulus homepage.
     var data = JSON.parse(body);
    console.log( data.name);
     console.log( data.attack);
     console.log( data.national_id);
    

});