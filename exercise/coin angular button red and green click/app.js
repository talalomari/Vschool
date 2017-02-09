var ang = angular.module("app", []);
ang.service("greenService", function () {


    this.addgreen = function (num) {
        this.sumval = num;
        this.sumval += 1;
    }

    this.subgreen = function (num) {
        this.subval = num;
        this.subval -= 1;
    }
});

ang.service("redService", function () {
    this.addred = function (num) {
        this.sumval = num
        this.sumval += 1;

    }
    this.subred = function (num) {
        this.subval = num
        this.subval -= 1;
    }
});


ang.controller("mycnt", function ($scope, greenService, redService) {
    $scope.greenvalue = 100;
    $scope.redvalue = 100;
    //    $scope.green = greenService.greenvalue;
    //    $scope.red = redService.redvalue;
    $scope.greenclick = function () {
        greenService.addgreen($scope.greenvalue);
        redService.subred($scope.redvalue);
        $scope.greenvalue = greenService.sumval;
        $scope.redvalue = redService.subval;
        if ($scope.redvalue <= 0) {
            $scope.redvalue = 100;
            $scope.greenvalue = 100;
        }




    };

    $scope.click = function () {
        redService.addred($scope.redvalue)
        greenService.subgreen($scope.greenvalue);
        $scope.greenvalue = greenService.subval;
        $scope.redvalue = redService.sumval;
        if ($scope.greenvalue <= 0) {
            $scope.redvalue = 100;
            $scope.greenvalue = 100;
        }


    };

});