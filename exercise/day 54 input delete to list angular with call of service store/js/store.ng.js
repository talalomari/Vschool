var store= angular.module("mystore",[]);
store.service("store",function(){
   this.list=[] ;
    this.userText;
    this.userPrice;
    this.submit= function() {
    var obj ={};
    obj[this.userText]=this.userPrice;
      
    this.list.push(obj);
    };
});  
   