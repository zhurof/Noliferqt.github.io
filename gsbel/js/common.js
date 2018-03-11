$(function() {
		/*Slider*/
	$(".owl-carousel.main-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true
	});

	/*vars*/
	var link = document.querySelector(".mobile-menu-btn");
	var mbopen = document.querySelector(".mobile-menu");
	var popup = document.querySelector(".modal-login");
	var email = popup.querySelector("[name=email]");
	var login = popup.querySelector("[name=login]");

	/*Open-closed mobile menu*/
	link.addEventListener("click", function (evt) {
		link.classList.toggle("mobile-menu-btn-open");
		mbopen.classList.toggle("mobile-menu-open");		
	});

	/*Open-closed search field*/
	$('.openform-btn').click(function(){
		$('.search-form').toggleClass('active');
	});

	/*Open-closed login form*/
	$('.login-link').click(function(){
		$('.modal-login').toggleClass('active');
		$('.registration-form').toggleClass('active');
		$('.registration-description').toggleClass('active');		
		login.focus();
	});

	$('.modal-close').click(function(){
		$('.modal-login').removeClass('active');
		$('.registration-form').removeClass('active');
		$('.registration-description').removeClass('active');
		$('.login-form').removeClass('active');
		$('.login-description').removeClass('active');	
	});

	$('.inner-login-link').click(function(){
		$('.registration-form').removeClass('active');
		$('.registration-description').removeClass('active');
		$('.login-form').addClass('active');
		$('.login-description').addClass('active');
		email.focus();
	});
	
	$('.inner-registration-link').click(function(){
		$('.login-form').removeClass('active');
		$('.login-description').removeClass('active');
		$('.registration-form').addClass('active');
		$('.registration-description').addClass('active');
	});
 /*Vars for full organizations*/
 	$('.organization-item.list').click(function(){
		$('.organization-full-list').addClass('full-list-open');
		$('.organization-item').addClass('off');
	});

 	$('.org-full-close').click(function(){
		$('.organization-full-list').removeClass('full-list-open');
		$('.organization-item').removeClass('off');
	});

	var mdfull = document.querySelector(".organization-full-list");

	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mdfull.classList.contains("full-list-open")) {
        mdfull.classList.remove("full-list-open");
      }
    }
  });
 /*Vars for add organization*/
  $('.open-org-form').click(function(){
		$('.organization-add').addClass('org-add-open');
		$('.organization-item').addClass('off');		
	});

   $('.modal-close.org').click(function(){
		$('.organization-add').removeClass('org-add-open');
		$('.organization-item').removeClass('off');	
	});

  var addfull = document.querySelector(".organization-add");

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addfull.classList.contains("org-add-open")) {
        addfull.classList.remove("org-add-open");
      }
    }
  });

});
