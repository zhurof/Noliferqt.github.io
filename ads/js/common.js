$(function() {
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true 
	});

	$('.mobile-menu-btn').click(function(){
		$('.navigation').toggleClass('active');
		$('.mobile-menu-btn').toggleClass('active');
	});

	//Slick
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		infinite: true,
		variableWidth: true,
		asNavFor: '.slider-for',
		prevArrow: '<button class="slide-arrow slide-arrow-left"></button>',
		nextArrow: '<button class="slide-arrow slide-arrow-right"></button>'
	});

	//Marks only for demonstration. Replace the classes on your, when you want install the site on CMS!!!
	$('.adv-card-checkbox.vip .checkbox-indicator').click(function(){
		$('.mark.prem-mark.ex').toggleClass('select');
		$('.mark.vip-mark.ex').toggleClass('select');
	});
	//Marks only for demonstration. Replace the classes on your, when you want install the site on CMS!!!
	$('#vip').click(function(){
		$('#ex').toggleClass('select');
	});

	//Tabs
	$('.tab.var1').click(function(){
		$('.tab.var2').removeClass('active');
		$('.tab.var3').removeClass('active');
		$('.tab.var1').addClass('active');
		$('.adv-cards.var2').removeClass('active');
		$('.adv-cards.var3').removeClass('active');
		$('.adv-cards.var1').addClass('active');		
	});
	
	$('.tab.var2').click(function(){
		$('.tab.var1').removeClass('active');
		$('.tab.var3').removeClass('active');
		$('.tab.var2').addClass('active');
		$('.adv-cards.var1').removeClass('active');
		$('.adv-cards.var3').removeClass('active');
		$('.adv-cards.var2').addClass('active');		
	});

	$('.tab.var3').click(function(){
		$('.tab.var2').removeClass('active');
		$('.tab.var1').removeClass('active');
		$('.tab.var3').addClass('active');
		$('.adv-cards.var1').removeClass('active');
		$('.adv-cards.var2').removeClass('active');
		$('.adv-cards.var3').addClass('active');		
	});

	//range slider
	$('#range1').ionRangeSlider({
		type: "double",
		min: 0,
		max: 10000000
	});

	$('#range2').ionRangeSlider({
		type: "double",
		min: 0,
		max: 150
	});


	//drop-mnu
	$('.drop-mnu').click(function(){
		$('.hidden-select-menu.apt-type-select').toggleClass('opened');	
		$('.drop-mnu').toggleClass('active');	
	});

	$('.form-select.drop').click(function(){
		$('.hidden-select-menu.room-type-select').toggleClass('opened');	
		$('.drop').toggleClass('active');	
	});

	



});
