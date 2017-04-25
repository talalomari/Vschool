var app = angular.module("app.home", ["ngRoute", "apiModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./views/home/home.tpl.html",
        controller: "homeCtrl"
    });
});

app.service("GetMoivesList", function ($http) {
    this.getData = function (userText) {
        return $http.get("http://www.omdbapi.com/?t=" + userText + "&y=&plot=short&r=json")
    }
    this.getDataByYear = function (userText) {
        return $http.get("http://www.omdbapi.com/?s='a'&y=" + userText + "&plot=full&r=json")
    }
    this.getMovieBySeries = function () {
        return $http.get("http://www.omdbapi.com/?s=a&Type=series&plot=full&r=json")
    }
});

app.controller("homeCtrl", function ($scope, GetMoivesList, apiService) {
    $scope.userText;
    $scope.getYear;
    $scope.listOfMovies = [];
    $scope.getMovie = function () {
        $scope.listOfMovies = [];
        GetMoivesList.getData($scope.userText).then(function (response) {
            if (response.data.Title) {
                $("#SearchMovieByName").show();
                $scope.img = response.data.Poster;
                $scope.Actors = response.data.Actors;
                $scope.Plot = response.data.Plot;
                $scope.Title = response.data.Title;
            } else {
                $("#SearchMovieByName").hide();
                $scope.img = response.data.Poster;
                $scope.Actors = response.data.Actors;
                $scope.Plot = response.data.Plot;
                $scope.Title = response.data.Title;
            }

        }, function (response) {
            $scope.img = 'N/A';
        })

    }

    $scope.getMovieByYear = function (year) {
        $("#SearchMovieByName").hide();
        GetMoivesList.getDataByYear(year).then(function (response) {
            $scope.listOfMovies = response.data.Search;
            console.log($scope.listOfMovies)
        }, function (response) {
            $scope.img = '';
        })
    }
    $scope.getMovieBySeries = function () {
        $("#SearchMovieByName").hide();
        GetMoivesList.getMovieBySeries().then(function (response) {
            $scope.listOfMovies = response.data.Search;
        }, function (response) {
            $scope.img = '';
        })
    }

    var init = function () {
        $scope.getMovieByYear(2017);

    };

    init();



    $scope.addFromFav = function () {
        var data = {
            img: $scope.img,
            Actors: $scope.Actors,
            Plot: $scope.Plot,
            Title: $scope.Title
        }

        apiService.postData(data).then($scope.getMovie);


    }

    $scope.add = function (valueFav) {
        console.log(valueFav);
        var data = {
            img: valueFav.Poster,
            Actors: valueFav.Actors,
            Plot: valueFav.Plot,
            Title: valueFav.Title
        }

        apiService.postData(data).then($scope.getMovie);


    }
});