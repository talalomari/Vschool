var app = angular.module("app", ["apiModule", "app.home","apiAuth","app.signup","app.SignIn"]);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo : "/home"
    }).otherwise({
        redirectTo : "/home"
    })
})