var ang = angular.module("app", []);
ang.controller("mycnt", function ($scope) {
    if(JSON.parse(localStorage.getItem("listArray"))) {
        $scope.list = JSON.parse(localStorage.getItem("listArray"))
    } else {
        $scope.list = [];
    }
        $scope.submit = function () {
        $scope.list.push({
            img:$scope.img,
            desc:$scope.desc,
            title:$scope.title
        });
        console.log($scope.list)
        localStorage.setItem("listArray", JSON.stringify($scope.list));
    };

});