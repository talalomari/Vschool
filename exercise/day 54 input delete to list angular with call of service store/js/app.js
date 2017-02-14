var ang= angular.module("app",["mystore"]);
ang.controller("mycnt",function($scope,store){
    $scope.list=[] ;
    $scope.userText;
    $scope.userPrice;
    $scope.total=0;
    $scope.submit= function() {
    var obj ={};
    obj[$scope.userText]=$scope.userPrice;
    $scope.total +=parseInt($scope.userPrice);
      
    $scope.list.push(obj);
    };
});