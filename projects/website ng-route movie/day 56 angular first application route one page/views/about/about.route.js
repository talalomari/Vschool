var app = angular.module("app.about", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./views/about/about.tpl.html",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
});