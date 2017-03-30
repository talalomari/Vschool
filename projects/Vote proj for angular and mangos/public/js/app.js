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
     
     
      this.addCommit = function (id,comments) {
    console.log(comments.comments[0]);
//     alert(comments[0][body]);
//       var data={
//            body:yyyy
//       }
        
        return $http.post("http://localhost:8080/resturant/" + id ,comments.comments[0]);
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
        for (var i = 0; i < $scope.timeLine.length; i++) {
            if ($scope.timeLine[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    
    
  
    
    $scope.loadData = function () {
       todoReq.getData().then(function (response) {
            $scope.timeLine = [];
            //            $scope.timeLine = response.data.data;
            var dataGet = response.data.data;
           console.log(dataGet[0].comments.length);
            for (var i = 0; i < dataGet.length; i++) {
                $scope.timeLine.push({
                    _id: dataGet[i]._id,
                    title: dataGet[i].title,
                    description: dataGet[i].description,
                    upVote: dataGet[i].upVote || 0,
                    downVote: dataGet[i].downVote || 0,
                    comments: dataGet[i].comments,
                    isShowingComment: false,
                    isShowingAddComment: false,
                    isShowingEdit: false
                })
            }
        }, function (response) {
            console.log(response.status);
        })
    };
    $scope.add = function () {
        var data = {
             title: $scope.title,
             upVote: $scope.upVote,
             downVote: $scope.downVote,
             comments:$scope.comments
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }
    
     //Show/Hide Comment
    $scope.showHideComment = function (_id) {
        index = $scope.getIndex(_id);
            $scope.timeLine[index].isShowingComment = !$scope.timeLine[index].isShowingComment;
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
        var upVote = $scope.timeLine[$index].upVote;
        upVote++;
        var data = {
            upVote: upVote
        }
        
        
        todoReq.increasevote(_id, data).then($scope.loadData)
        
      
    }
    
      $scope.decreasevote= function(_id){
           $index = $scope.getIndex(_id);
        var downVote = $scope.timeLine[$index].downVote;
        downVote++;
        var data = {
            downVote: downVote
        }
        todoReq.decreasevote(_id, data).then($scope.loadData)
        
      
    }
      
      
      
      $scope.addCommit= function(_id,sometext){
        var data = {
            comments:[{body:sometext}]
        }
        todoReq.addCommit(_id, data).then($scope.loadData)
        
      
    }
      
      
    
    
    
});