var ang = angular.module("app", []);
ang.service("todoService", function ($http) {
 
    this.getData = function () { 
        return $http.get("http://api.vschool.io/talalom/todo/")
    }
    
    this.setData = function (data) { 
        return $http.post("http://api.vschool.io/talalom/todo/",data)
    }
     this.deleteData = function (id) { 
        return $http.delete("http://api.vschool.io/talalom/todo/" + id)
    }
     
      this.putData = function (data,id) { 
        return $http.put("http://api.vschool.io/talalom/todo/" + id,data)
    }




});

ang.controller("httpctrl", function ($scope, todoService) {
    $scope.userText;
    $scope.updateuserText;
    $scope.loadData= function() {
         todoService.getData().then(function (response) {
         $scope.items = response.data;
       
    }, function (response) {
        alert(response.status);
    })
        
    }
    
    $scope.postdata= function(){
        var myData={
            title: $scope.userText
        }
         todoService.setData(myData).then($scope.loadData)
    }
    
 
    
     $scope.deleteData= function(id){
         todoService.deleteData(id).then($scope.loadData)
    }
     
     
    $scope.postdata= function(id,ii){
     console.log(id);
    console.log(ii);
        
        var myupdatedData={
            title: $scope.updateuserText
        }
      
         todoService.putData(myupdatedData,id).then($scope.loadData)
    }


});