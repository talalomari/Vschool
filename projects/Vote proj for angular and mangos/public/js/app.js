var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/resturant");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/resturant/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/resturant/" + id);
    }
    this.editData = function (id, data) {
        var str = "?";
        for(key in data){
            str += key;
            str += "=";
            str += data[key];
            str += "&"
        }
        return $http.put("http://localhost:8080/resturant/" + id + str);
    }
    
    
     this.increasevote = function (id,data) {
       var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/resturant/" + id + "?" + query);
    }
     
     
      this.addCommit = function (id,comment) {
      console.log(data);
      alert(id);
       var data={
            body: "this is the first coomti"
       }
        
        return $http.post("http://localhost:8080/resturant/" + id ,data);
    }
     
     
     
     
      this.decreasevote = function (id,data) {
       var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/resturant/" + id + "?" + query);
    }
    
    
});

app.controller("myCtrl", function ($scope, todoReq) {
       $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.todoItems.length; i++) {
            if ($scope.todoItems[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    
    
  
    
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data.data;
        
        }, function (response) {
            console.log(response.data.data.title);
        })
    };
    $scope.add = function () {
        var data = {
             title: $scope.title,
             upvote: $scope.upvote,
             downvote: $scope.downvote,
             comments:$scope.comments
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }

    $scope.edit = function (id, editinput) {
        var data = {
            name: editinput
        }
      
        todoReq.editData(id, data).then(function () {
            $scope.todoItem = data.name;
        }, function (error) {
            console.log(error.status);
        });
        $scope.edititem = "";
        $scope.loadData();
    }
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
    
    
    $scope.increasevote= function(_id){
           $index = $scope.getIndex(_id);
        var upvote = $scope.todoItems[$index].upVote;
        upvote++;
        var data = {
            upVote: upvote
        }
        todoReq.increasevote(_id, data).then($scope.loadData)
        
      
    }
    
      $scope.decreasevote= function(_id){
           $index = $scope.getIndex(_id);
        var downVote = $scope.todoItems[$index].downVote;
        downVote++;
        var data = {
            downVote: downVote
        }
        todoReq.decreasevote(_id, data).then($scope.loadData)
        
      
    }
      
      
      
      $scope.addCommit= function(_id){
         alert(_id)
        var data = {
            comments:[{body:"hhhhh"}]
        }
        todoReq.addCommit(_id, data).then($scope.loadData)
        
      
    }
      
      
    
    
    
});