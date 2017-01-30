var submit = document.getElementById("submit")
var wait =  document.getElementById("wait")

submit.addEventListener("click", callFuntion);
function callFuntion() {
    alert("hello");
}

var callTimer= function(){
setTimeout(function(){
     alert("hi");
},2000)

}


wait.addEventListener("click", callTimer);





