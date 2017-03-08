$(document).ready(function() {


//PARALLAX FUNCTION
$(window).scroll(function(e){
  var scrolled = $(window).scrollTop();
  // $('.intro-header').css('top',-(120+scrolled*.64)+'px');
  $('.background-image').css('top',-(scrolled*.69)+'px');
});

// Image Hover
$(".webpiece").mouseover(function(){
	$(this).find(".clickme").css({"display":"inline-block"})
});

$(".webpiece").mouseout(function(){
	$(".clickme").css({"display":"none"})
});

// Internal Image Link Hover
$(".leftclick").mouseover(function(){
	$(this).css({"background-color":"rgba(0,0,0,0.4)"})
	$(this).css({"color":"rgba(255,255,255, .9)"})
});

$(".leftclick").mouseout(function(){
	$(this).css({"background-color":"rgba(0,0,0,0.2)"})
	$(this).css({"color":"rgba(255,255,255,.6)"})
});

$(".rightclick").mouseover(function(){
	$(this).css({"background-color":"rgba(0,0,0,0.4)"})
	$(this).css({"color":"rgba(255,255,255, .9)"})
});

$(".rightclick").mouseout(function(){
	$(this).css({"background-color":"rgba(0,0,0,0.2)"})
	$(this).css({"color":"rgba(255,255,255,.6)"})
});

});