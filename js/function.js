// JavaScript Document
$(document).ready(function(e) {
        $('.burger-menu').click(function(e) {
            $('.mobile-header').toggleClass('header-view');
        });
		
        $('.cross-menu').click(function(e) {
            $('.mobile-header').toggleClass('header-view');
        });
    });
	$(window).scroll(function(){
  	var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed-header');
  		else sticky.removeClass('fixed-header');
	})
	$(window).resize(function() {
        if ($(this).width() > 991) {
           $(".mobile-header").removeClass('header-view');
        }
		
});