$(function() {
	
	$(".owl-carousel.main-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true
	});

	$(".owl-carousel.organizations-carousel").owlCarousel({
		loop: true,
		items: 8,
		smartSpeed: 700,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			1600 : {
				items: 8
			},
			1200 : {
				items: 7
			},
			1000 : {
				items: 6
			},
			800 : {
				items: 5
			},
			400 : {
				items: 4
			},
			0 : {
				items: 3
			}
		}
	});

	$(".owl-carousel.sale-slider").owlCarousel({
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
				$('.organization-item').removeClass('off');
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

/*timer
function countdown(){
	var now = new Date();
	var eventDate = new Date(2018, 11, 25);

	var currentTiime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTiime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countdown, 1000);
}
countdown();
*/

/*********Map*********
function initialize() {
	var realmap = document.getElementById('realmap');
	var mapOptions = {
		scrollwheel: true,
		center: new google.maps.LatLng(34.8937876,-111.7007464),
		zoom: 9,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(realmap, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(34.8937876,-111.7007464),
		map: map,
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
*/