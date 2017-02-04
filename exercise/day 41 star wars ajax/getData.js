var getData = function () {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function (result) {
              var select = $("#selectCurrency");
            var rate=[];
            rate=result.rates
            console.log(rate[0]);
        for (var i=0;i<rate.length;i++)
        $("#selectCurrency").append("<option>" + rate[0][i] +"</option>") ;         
     
        }
    });
}


$(document).ready(function () {
    getData();
});