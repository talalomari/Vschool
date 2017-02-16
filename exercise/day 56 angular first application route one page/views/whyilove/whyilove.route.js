var app = angular.module("app.whyilove", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/whyilove", {
    templateUrl: "./views/whyilove/whyilove.tpl.html",
    controller: "whyiloveCtrl"
  });
});

app.controller("whyiloveCtrl", function($scope) {
});