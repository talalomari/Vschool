var app = angular.module("app.home", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "./views/home/home.tpl.html",
    controller: "homeCtrl"
  });
});

app.controller("homeCtrl", function($scope) {
});