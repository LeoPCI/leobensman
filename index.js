$(document).ready(function() {

	$('#connect a img').hover(function() {
		$(this).css({'filter': 'invert(75%) drop-shadow(0px 0px 6px red)'});
	});

	$('#connect a img').mouseout(function() {
		$(this).css({'filter': 'none'});
	});

});