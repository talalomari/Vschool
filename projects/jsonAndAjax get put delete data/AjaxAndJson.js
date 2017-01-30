var getData= function(){
	$.ajax({
    url: "http://api.vschool.io/talalom/todo/",
    type:"GET",
    success: function(result) {
		for (var i=0;i<result.length;i++){
			    var outputData="<ul white-space:nowrap overflow-x:hidden>  <li>" + result[i].title + "<\li> <li>"+result[i].description + "<\li><li>"+result[i].Price + "<\li><li>" + result[i].completed + "<\li>  <button  id=" + result[i]._id +" class=btn btn-default>" + "Delete" + "</button> </ul>" ;                 
               $("#getdataoutput").append(outputData);
}
    }
});
}

$("#get").click(function() {
	getData();   
})


$("#Set").click(function() {
    var title=$("#title").val();
    var description=$("#description").val();
    var Price=$("#Price").val();
    var url=$("#url").val();
	
    var setdata={title:title,description:description,Price:Price,url:url};
	alert(setdata );
	
    var insertdata= $.ajax({
	type:"POST",
    url: "http://api.vschool.io/talalom/todo/",
    data:setdata,
    success: function() {
        getData();
    }		
});
})


$("#delete").click(function(){
$.ajax({
    url: 'http://api.vschool.io/talalom/todo/5887699bf945ec460e3c5a59',
    type: 'DELETE',
    success: function() {
        alert("Delete successfully");
    }
});
})




$("#update").click(function() {
    var title=$("#title").val();
    var description=$("#description").val();
    var Price=$("#Price").val();
    var url=$("#url").val();
	
    var setdata={title:title,description:description,Price:Price,url:url};
	alert(setdata );
	
    var insertdata= $.ajax({
	type:"PUT",
    url: "http://api.vschool.io/talalom/todo/588769bef945ec460e3c5a5a",
    data:setdata,
    success: function() {
        getData();
    }		
});
})




//to get id you have to get it like that data[i]._id
