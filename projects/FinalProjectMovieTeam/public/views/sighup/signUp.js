var app = angular.module("app.signup", ["ngRoute", "apiAuth"]);
app.config(function($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl : "./views/sighup/signUp.tbl.html",
        controller: "signUpCtrl"
    })
})

app.controller("signUpCtrl", function($scope,apiSignUp) {
    $scope.userInput = {};

    $scope.signUp = function() {
        var data = {
            username : $scope.userInput.username,
            password: $scope.userInput.password,
           
        }
        apiSignUp.postData(data).then(
       function(response){
        alert("you are sign up")
       }, 
       function(response){
        alert(response.statusText+ " error in sign up")
       }
    );
         $scope.userInput = {};
        
    }
})