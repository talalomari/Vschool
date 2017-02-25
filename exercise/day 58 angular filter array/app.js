var ang= angular.module("app",[]);
ang.filter("search",function(){
    return function(input,term){
    var result=[];
    for (var i=0;i<input.length;i++){
        if (input[i].name.indexOf(term)!=-1){
            result.push(input[i])
        }
    }
    return result;
    }
})
ang.controller("mycnt",function($scope){
    
  $scope.searhTerm="";
    $scope.data=[
        {
            name:"ahmad",
            size:8
        },
        {
            name:"omar",
            size:1
        },
        {
            name:"talal",
            size:2
        },
        {
            name:"datal",
            size:5
        }
    ]
});