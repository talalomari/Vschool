var app = angular.module("app.home", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./views/home/home.tpl.html",
        controller: "homeCtrl"
    });
});


app.service("GetMoivesList", function ($http) {

    this.getData = function (userText) {
        return $http.get("http://www.omdbapi.com/?t=" +userText + "&y=&plot=short&r=json")
    }
});

app.controller("homeCtrl", function ($scope, GetMoivesList) {
    $scope.userText
    $scope.getMovie = function () {
        GetMoivesList.getData($scope.userText).then(function (response) {
            $scope.img = response.data.Poster
            $scope.Actors = response.data.Actors
            $scope.Plot = response.data.Plot
            $scope.Title = response.data.Title


        }, function (response) {
            alert(response.status);
        })

    }

});