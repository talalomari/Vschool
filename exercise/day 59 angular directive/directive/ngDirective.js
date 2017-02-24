var app = angular.module("nameModule", []);

app.directive("name", function() {
  return {
    scope: {
      title: "=",
      colorOfText: "@"
    },
    restrict: "AE",
        templateUrl: "directive/directivePage.html",
        link: function(scope, elem, attrs) {
      console.log("Loaded the directive");
      elem.bind("click", function() {
        console.log(scope.title);
        console.log(scope.colorOfText);
        elem.css("color", scope.colorOfText);
      });
    }
  }
});