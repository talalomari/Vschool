var app = angular.module("apiModule", []);

app.service("apiService", function($http) {
    this.getData = function() {
        return $http.get("http://localhost:8080/todo/");
    };
    this.postData = function(data) {
        console.log(data);
        return $http.post("http://localhost:8080/todo/", data)
    }
    this.deleteData = function(id) {
        return $http.delete("http://localhost:8080/todo/" + id)
    }
    this.updateData = function(id, data) {
        var query = "?"
        for(key in data) {
            query += key + "=" + data[key] + "&"
        }
        return $http.put("http://localhost:8080/todo/" + id + query)
    }
    
    
    
    
    
    
    
    
    
    
    this.increasevote = function (id, data) {

        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/todo/" + id + "?" + query);
    }


    this.addCommit = function (id, comments) {
        console.log(comments.comments[0]);
        //     alert(comments[0][body]);
        //       var data={
        //            body:yyyy
        //       }

        return $http.post("http://localhost:8080/todo/" + id, comments.comments[0]);
    }




    this.decreasevote = function (id, data) {
        var query = "";
        for (key in data) {
            query += key;
            query += "=";
            query += data[key];
            query += "&"
        }
        return $http.put("http://localhost:8080/todo/" + id + "?" + query);
    }


});









