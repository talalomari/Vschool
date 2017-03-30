var app = angular.module("app.contactus", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/contactUs", {
    templateUrl: "./views/contactus/contactUs.tpl.html",
    controller: "contactUsCtrl"
  });
});

app.controller("contactUsCtrl", function($scope) {
});