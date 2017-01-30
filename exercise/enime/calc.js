var calculation = function(firstNumber, secondNumber, sign) {
	var result = eval(firstNumber + sign + secondNumber);
	document.getElementById('Result_number').value=result;

}


//var clearTextBox= function(){
//document.getElementById('Result_number').innerHTML="";
//document.getElementById('first_number').innerHTML="";
//document.getElementById('Second_number').innerHTML="";
	
//}


//window.onload = function () {

//	 var btnClick = document.getElementById("btn-sum");
//	btnClick.addEventListener("click", function () {
//		caluculationway2();
//	})
		
	
							
//	var caluculationway2 =function(){
//	var num1 = document.getElementById("first_number");
//    var num2 = document.getElementById("Second_number");
//	var result=eval(num1.value) + eval(num2.value);
//	document.getElementById('Result_number').value=result;
//	}
//	}