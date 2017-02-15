var ang= angular.module("app",[]);
ang.controller("mycnt",function($scope){
    $scope.list=[] ;
    $scope.total=0;
    $scope.submit= function() {
    var obj ={name:$scope.userText,price:$scope.userPrice};
    $scope.total +=parseInt($scope.userPrice);  
    $scope.list.push(obj);
    };
});