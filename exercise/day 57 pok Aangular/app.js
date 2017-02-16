var ang = angular.module("app", []);
ang.service("getPokService", function ($http) {

    this.getData = function (pokID) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + pokID)
    }
});

ang.controller("httpctrl", function ($scope, getPokService) {
    $scope.getPok = function () {
        $scope.pokID;

        getPokService.getData($scope.pokID).then(function (response) {
            console.log(response.data.name);
            $scope.pokName = response.data.name;

        }, function (response) {
            alert(response.status);
        })
    }

});