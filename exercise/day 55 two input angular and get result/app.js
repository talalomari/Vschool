var ang= angular.module("app",[]);
ang.controller("mycnt",function($scope){
    $scope.list=[] ;
    $scope.userText;
    $scope.submit= function() {
      
    $scope.list.push($scope.userText);
    };
    
    $scope.delete= function() {
   var index= $scope.list.indexOf($scope.userText) 
   if (index>-1){
     $scope.list.splice(index,1); 
       
   } else{
       alert("not found");
   }
    
    };
});