var app = angular.module("app.about", ["ngRoute","apiModule"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./views/about/about.tpl.html",
    controller: "aboutCtrl"
  });
});



app.controller("aboutCtrl", function ($scope, apiService) {
    
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.timeLine.length; i++) {
            if ($scope.timeLine[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadData = function () {
       
        apiService.getData().then(function (response) {
            $scope.timeLine = [];
            //            $scope.timeLine = response.data.data;
            var dataGet = response.data.data;
         
            for (var i = 0; i < dataGet.length; i++) {
                $scope.timeLine.push({
                    _id: dataGet[i]._id,
                    Title: dataGet[i].Title,
                    img: dataGet[i].img,
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
    }
    $scope.add = function () {
        var data = {
            title: $scope.title,
            upVote: $scope.upVote,
            downVote: $scope.downVote,
            comments: $scope.comments
        }
        apiService.postData(data).then($scope.loadData, function (error) {
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

        apiService.editData(id, data).then(function () {
            $scope.todoItem = data.name;
        }, function (error) {
            console.log(error.status);
        });
        $scope.edititem = "";
        $scope.loadData();
    }
    $scope.deleteItem = function (_id) {
        apiService.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }


    $scope.increasevote = function (_id) {

        $index = $scope.getIndex(_id);
        var upVote = $scope.timeLine[$index].upVote;
        upVote++;
        var data = {
            upVote: upVote
        }


        apiService.increasevote(_id, data).then($scope.loadData)


    }

    $scope.decreasevote = function (_id) {
        $index = $scope.getIndex(_id);
        var downVote = $scope.timeLine[$index].downVote;
        downVote++;
        var data = {
            downVote: downVote
        }
        apiService.decreasevote(_id, data).then($scope.loadData)


    }


    $scope.addCommit = function (_id, sometext) {
        console.log(_id + " " + sometext)
        var data = {
            comments: [{
                body: sometext
            }]
        }
        apiService.addCommit(_id, data).then($scope.loadData)


    }





});