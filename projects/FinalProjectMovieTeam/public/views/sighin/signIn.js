var app = angular.module("app.SignIn", ["ngRoute", "apiAuth"]);
app.config(function($routeProvider) {
    $routeProvider.when("/signIn", {
        templateUrl : "./views/sighin/signIn.tbl.html",
        controller: "SignInCtrl"
    })
})

app.controller("SignInCtrl", function($scope,apiSignIn) {
    $scope.userInput = {};

    $scope.signIn = function() {
        var data = {
            username : $scope.userInput.username,
            password: $scope.userInput.password,
           
        }
        apiSignIn.postData(data).then(
       function(response){
        alert("you are logged in")
       }, 
       function(response){
      alert(response.statusText+ " error in sign up")
       }
    );
         $scope.userInput = {};
        
    }
})

