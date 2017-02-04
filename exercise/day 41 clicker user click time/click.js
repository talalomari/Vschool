var count=0
$(document).keypress(function(event){
  alert(String.fromCharCode(event.which));
    count+=1
      alert(count);
    
   $("#getUserKeyDown").html(count)
});


$(document).mousedown(function(event){
    count+=1
   $("#getUserKeyDown").html(count)
});