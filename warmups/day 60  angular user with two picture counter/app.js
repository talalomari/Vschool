var ang = angular.module("app", []);
ang.service("firstService", function () {
    this.sumval = 0

    this.addfirstBtn = function () {
        this.sumval += 1;
          console.log(this.sumval);
    }
});

ang.service("secondService", function () {
    this.sumval = 0
    this.addsecondBtn = function () {
        this.sumval += 1;

    }
});
ang.controller("mycnt", function ($scope, firstService, secondService) {
    $scope.firstValue = firstService.sumval;
    $scope.secondValue = secondService.sumval;
    
    firstService.addfirstBtn()
         $scope.firstValue=firstService.sumval;
    
      
    
    
    secondService.addsecondBtn()
         $scope.secondValue=secondService.sumval;
    
        
    
});