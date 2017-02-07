var ang= angular.module("app",[]);
ang.controller("mycnt",function($scope){
    $scope.list = [];
    $scope.submit = function () {
              $scope.list.push($scope.fileName);
			  $scope.list.push($scope.email);
			  $scope.list.push($scope.phone);
			  $scope.list.push($scope.lname);
			  $scope.list.push($scope.pob);
			  $scope.list.push($scope.favorit);
			  $scope.list.push($scope.moreAboutYou);
       
    };
	 $scope.clear  = function () {
    $scope.list = [];
     $scope.fileName="";
     $scope.email="";
     $scope.phone="";
     $scope.lname="";
     $scope.pob="";
     $scope.favorit="";
     $scope.moreAboutYou="";
	 }
});