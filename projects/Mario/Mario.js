var getPoint = function() {
	
var firstEnemy=	$('#firstEnemy').val() ;
	$('#ResultFirstEnemy').html(firstEnemy * 5) ;
	
var secondEnemy=$('#secondEnemy').val() ;
	$('#ResultSecondEnemy').html(secondEnemy * 10);
	
var thirdEnemy=	$('#thirdEnemy').val() ;
	$('#ResultThirdEnemy').html(thirdEnemy * 15) ;
	
var result=(firstEnemy * 5) + (secondEnemy *10) + (thirdEnemy * 15);
	$('#Result').html(result) ;
            
}
