var app = angular.module("app", ["ngRoute", "app.home", "app.about","app.contactus"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when("/", {
    redirectTo: "/home"
  }).otherwise("/", {
    redirectTo: "/home"
  })
})