var ang= angular.module("myNewApp",["shopModule"]);


ang.controller("myController",function($scope){
    $scope.shopItems=[];
    $scope.addShopItem = function () {
        $scope.shopItems.push({
            name: $scope.name,
            amount: $scope.amount,
            price:$scope.price

       })
        $scope.name = "";
        $scope.amount =0;
        $scope.price=0
        
    }
});