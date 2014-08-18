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

$("#zoom").elevateZoom({
	gallery:'gallery',
	cursor: 'pointer',
	zoomType : "inner",
	galleryActiveClass: "active",
	imageCrossfade: true,
	zoomWindowWidth:'100%',
    zoomWindowHeight:200,
	loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"
}); 
//build fancybox links
$('.image figure').after('<div class="fancybox-links" />');
$('.fancybox-links').css({
	display: 'none'
})
var $links = $('#gallery a'),
	$large_img = $('.image figure img'),
	$index = 0;
$links.each(function(index){
	var $src= $('img',this).attr('data-zoom-image');
	$('.fancybox-links').append('<a class="fancybox" href="'+$src+'" rel="gallery" />')
	$(this).on('click',function(evt){
		evt.preventDefault();
		var $src = $('img',this).attr('src');
		$large_img.attr('src',$src);
		$index = $links.index(this);
	})
})
$large_img.parent('a').on('click',function(evt){
	evt.preventDefault();
	$('.fancybox-links a').eq($index).trigger('click');
})
$('.fancybox').fancybox();


$('.zoom').on('click',function(e){
	e.preventDefault();
	$('.fancybox').eq(0).trigger('click');
})

})