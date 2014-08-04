$(document).ready(function(){
	resizeSlider();
$('select').selectBox();


$('#mobile-menu').on('click',function(e){
	e.preventDefault();
	if($(this).hasClass('open')){
			$(this).removeClass('open').html('Open Menu').next('ul').hide();
	}else{
		$(this).addClass('open').html('Close Menu').next('ul').show();
	}
		
})
function resizeSlider(){
	if($(window).width() > 639){
		var height = $('#slider img.front').height();
	$('#slider').height(height)
	}
}
$(window).resize(function(){
	resizeSlider();
})

})