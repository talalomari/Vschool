var app = angular.module("apiAuth", []);

app.service("apiSignUp", function($http) {
   
    this.postData = function(data) {
        return $http.post("http://localhost:8080/signup/", data)
    }
})


app.service("apiSignIn", function($http) {
   
    this.postData = function(data) {
        return $http.post("http://localhost:8080/signin/", data)
    }
})



