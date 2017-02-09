var ang = angular.module("app", []);
   var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
ang.service("todoService", function ($http) {
 
    this.getData = function (userText) { 
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + userText, config)
    }



});

ang.controller("httpctrl", function ($scope, todoService) {
    $scope.userText;
    todoService.getData($scope.userText).then(function (response) {
        $scope.list = response.data;
       
    }, function (response) {
        alert(response.status);
    })


});