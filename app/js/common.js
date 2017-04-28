$(window).on('load', function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut(100); 
});


$(function() {

//SVG Fallback
if(!Modernizr.svg) {
	$("img[src*='svg']").attr("src", function() {
		return $(this).attr("src").replace(".svg", ".png");
	});
};


/*Toggle main menu*/
$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".header-nav").slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768')   {
		$('.header-nav').removeAttr('style');
		$('.toggle-mnu').removeClass('on');
	}
});


/*Tabs*/
$(".tab-item").not(":first").hide();
$(".tabs .tab").click(function() {
	$(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


/*Pricing item*/
$('.pricing-item').on('click', function(){
	$('.pricing-item').removeClass('active')
	$(this).addClass('active')
});


/*Scroll to block*/
$('.header-nav a').on('click', function () {

	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;

	if ($(elementClick).length != 0) {    // проверка существования элемента
		$('html, body').animate({ scrollTop: destination - 60}, 1000);
		if ($('.toggle-mnu').hasClass('on')) {
			$('.header-nav').slideUp();
			$('.toggle-mnu').removeClass('on');
		}
	}
	return false; 
});


/*To top button*/
$('.to-top').on('click', function() {
	$('body, html').animate({ scrollTop:0 },1000);
	return false;
});


$(window).scroll(function() {
	if($(this).scrollTop() > $(window).height()) {
		$('.to-top').fadeIn();
	} else {
		$('.to-top').fadeOut();
	}
});


});

