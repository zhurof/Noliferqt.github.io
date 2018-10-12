$(function() {

	$(".owl-carousel.sect-third-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: false
	});

	$(".owl-carousel.sect-five-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: false
	});

	$(".owl-carousel.sect-six-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 500,
		nav: true,
		dots: true,
		navText: false
	});

	$(".owl-carousel.sect-eight-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 500,
		nav: true,
		dots: false,
		navText: false
	});


	/*Magnific*/
	$('.open-popup-link').magnificPopup({
  	type:'inline'
	});


	/*arrow top and bottom*/
	$('.header .arrow-bottom').click(function(){
		$('html,body').animate({scrollTop: $('.header').height()}, "slow");
		return false;
	});

	$('.arrow-top-wrap .arrow-top').click(function(){
		$('html,body').animate({scrollTop: 0 }, "slow");
		return false;
	});
	/*scrolling to section nine*/
	$('.sect-second .btn.sect-items-view').on('click', function() {
 	 $('html,body').animate({scrollTop:$('.sect-nine').offset().top+"px"},{duration:1E3});
	});

	/*Map*/
	ymaps.ready(init);
  		var myMap,
  				myPlacemark;

  		function init(){     
    			myMap = new ymaps.Map("map", {
      			center: [55.08199588, 82.93409459],
     				zoom: 17
    			});

    			myPlacemark = new ymaps.Placemark([55.08240517, 82.93419651], {  
    				hintContent: 'Большая медведица',
    				balloonContent: 'г. Новосибирск ТВК Большая Медведица  ул. Светлановская, 50' 
    			},{
    				preset: 'islands#redDotIcon'
    			});

   				myMap.geoObjects.add(myPlacemark);
  		}

  /*Header locations*/
  $('#location-left').click(function(){
		$('.location-left').addClass('active');
		$('.location-right').addClass('active');
		$('.location-left-addres').addClass('active');
	});

  $('.location-left-addres').click(function(){
		$('.location-left').removeClass('active');
		$('.location-right').removeClass('active');
		$('.location-left-addres').removeClass('active');
	});

   $('#location-right').click(function(){
		$('.location-left').addClass('active');
		$('.location-right').addClass('active');
		$('.location-right-addres').addClass('active');
	});

   $('.location-right-addres').click(function(){
		$('.location-left').removeClass('active');
		$('.location-right').removeClass('active');
		$('.location-right-addres').removeClass('active');
	});

  /*Hidden form add-text*/
   $('#txt-1').click(function(){
		$('.callback-form-title .txt-1').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-2').click(function(){
		$('.callback-form-title .txt-2').addClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-3').click(function(){
		$('.callback-form-title .txt-3').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-4').click(function(){
		$('.callback-form-title .txt-4').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-5').click(function(){
		$('.callback-form-title .txt-5').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-6').click(function(){
		$('.callback-form-title .txt-6').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-7').click(function(){
		$('.callback-form-title .txt-7').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
		$('.callback-form-title .txt-8').removeClass('active');
	});

  $('#txt-8').click(function(){
		$('.callback-form-title .txt-8').addClass('active');
		$('.callback-form-title .txt-2').removeClass('active');
		$('.callback-form-title .txt-3').removeClass('active');
		$('.callback-form-title .txt-4').removeClass('active');
		$('.callback-form-title .txt-5').removeClass('active');
		$('.callback-form-title .txt-6').removeClass('active');
		$('.callback-form-title .txt-7').removeClass('active');
		$('.callback-form-title .txt-1').removeClass('active');
	});

	/*Tabs for sect-second when click on button*/
	$('#questbtn1').click(function(){
		$('#question1').removeClass('active');
		$('#question3').removeClass('active');
		$('#question4').removeClass('active');
		$('#question5').removeClass('active');
		$('#step1').removeClass('active');
		$('.step1').removeClass('active');
		$('#question2').addClass('active');
		$('#step2').addClass('active');
		$('.step2').addClass('active');
		$('#questbtn2').addClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn4').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#questbtn2').click(function(){
		$('#question1').removeClass('active');
		$('#question2').removeClass('active');
		$('#question4').removeClass('active');
		$('#question5').removeClass('active');
		$('#step2').removeClass('active');
		$('.step2').removeClass('active');
		$('#question3').addClass('active');
		$('#step3').addClass('active');
		$('.step3').addClass('active');
		$('#questbtn3').addClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn4').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#questbtn3').click(function(){
		$('#question1').removeClass('active');
		$('#question2').removeClass('active');
		$('#question3').removeClass('active');
		$('#question5').removeClass('active');
		$('#step3').removeClass('active');
		$('.step3').removeClass('active');
		$('#question4').addClass('active');
		$('#step4').addClass('active');
		$('.step4').addClass('active');
		$('#questbtn4').addClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#questbtn4').click(function(){
		$('#question1').removeClass('active');
		$('#question2').removeClass('active');
		$('#question3').removeClass('active');
		$('#question4').removeClass('active');
		$('#step4').removeClass('active');
		$('.step4').removeClass('active');
		$('#question5').addClass('active');
		$('#step5').addClass('active');
		$('.step5').addClass('active');
		$('#questbtn5').addClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn4').removeClass('active');
	});

	/*Tabs for sect-second when click on tab*/
	$('#question1').click(function(){
		$('#question2').removeClass('active');
		$('#question3').removeClass('active');
		$('#question4').removeClass('active');
		$('#question5').removeClass('active');
		$('#step2').removeClass('active');
		$('.step2').removeClass('active');
		$('#step3').removeClass('active');
		$('.step3').removeClass('active');
		$('#step4').removeClass('active');
		$('.step4').removeClass('active');
		$('#step5').removeClass('active');
		$('.step5').removeClass('active');
		$('#question1').addClass('active');
		$('#step1').addClass('active');
		$('.step1').addClass('active');
		$('#questbtn1').addClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn4').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#question2').click(function(){
		$('#question1').removeClass('active');
		$('#question3').removeClass('active');
		$('#question4').removeClass('active');
		$('#question5').removeClass('active');
		$('#step1').removeClass('active');
		$('.step1').removeClass('active');
		$('#step3').removeClass('active');
		$('.step3').removeClass('active');
		$('#step4').removeClass('active');
		$('.step4').removeClass('active');
		$('#step5').removeClass('active');
		$('.step5').removeClass('active');
		$('#question2').addClass('active');
		$('#step2').addClass('active');
		$('.step2').addClass('active');
		$('#questbtn2').addClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn4').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#question3').click(function(){
		$('#question1').removeClass('active');
		$('#question2').removeClass('active');
		$('#question4').removeClass('active');
		$('#question5').removeClass('active');
		$('#step1').removeClass('active');
		$('.step1').removeClass('active');
		$('#step2').removeClass('active');
		$('.step2').removeClass('active');
		$('#step4').removeClass('active');
		$('.step4').removeClass('active');
		$('#step5').removeClass('active');
		$('.step5').removeClass('active');
		$('#question3').addClass('active');
		$('#step3').addClass('active');
		$('.step3').addClass('active');
		$('#questbtn3').addClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn4').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#question4').click(function(){
		$('#question1').removeClass('active');
		$('#question3').removeClass('active');
		$('#question2').removeClass('active');
		$('#question5').removeClass('active');
		$('#step1').removeClass('active');
		$('.step1').removeClass('active');
		$('#step3').removeClass('active');
		$('.step3').removeClass('active');
		$('#step2').removeClass('active');
		$('.step2').removeClass('active');
		$('#step5').removeClass('active');
		$('.step5').removeClass('active');
		$('#question4').addClass('active');
		$('#step4').addClass('active');
		$('.step4').addClass('active');
		$('#questbtn4').addClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn5').removeClass('active');
	});

	$('#question5').click(function(){
		$('#question1').removeClass('active');
		$('#question3').removeClass('active');
		$('#question2').removeClass('active');
		$('#question4').removeClass('active');
		$('#step1').removeClass('active');
		$('.step1').removeClass('active');
		$('#step3').removeClass('active');
		$('.step3').removeClass('active');
		$('#step2').removeClass('active');
		$('.step2').removeClass('active');
		$('#step4').removeClass('active');
		$('.step4').removeClass('active');
		$('#question5').addClass('active');
		$('#step5').addClass('active');
		$('.step5').addClass('active');
		$('#questbtn5').addClass('active');
		$('#questbtn1').removeClass('active');
		$('#questbtn3').removeClass('active');
		$('#questbtn2').removeClass('active');
		$('#questbtn4').removeClass('active');
	});

	/*Tabs for sect-third*/
		
	$('.glass1').click(function(){
		$('.glass2').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass1').addClass('active');	
	});

	$('.glass2').click(function(){
		$('.glass1').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass2').addClass('active');	
	});

	$('.glass3').click(function(){
		$('.glass1').removeClass('active');
		$('.glass2').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass3').addClass('active');	
	});

	$('.glass4').click(function(){
		$('.glass1').removeClass('active');
		$('.glass2').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass4').addClass('active');	
	});

	$('.glass5').click(function(){
		$('.glass1').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass2').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass5').addClass('active');	
	});

	$('.glass6').click(function(){
		$('.glass1').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass2').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass6').addClass('active');	
	});

	$('.glass7').click(function(){
		$('.glass1').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass2').removeClass('active');	
		$('.glass8').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.slider.glass8').removeClass('active');
		$('.glass7').addClass('active');	
	});

	$('.glass8').click(function(){
		$('.glass1').removeClass('active');
		$('.glass3').removeClass('active');
		$('.glass4').removeClass('active');
		$('.glass5').removeClass('active');
		$('.glass6').removeClass('active');	
		$('.glass7').removeClass('active');	
		$('.glass2').removeClass('active');
		$('.slider.glass1').removeClass('active');
		$('.slider.glass2').removeClass('active');
		$('.slider.glass4').removeClass('active');
		$('.slider.glass5').removeClass('active');
		$('.slider.glass6').removeClass('active');
		$('.slider.glass7').removeClass('active');
		$('.slider.glass3').removeClass('active');
		$('.glass8').addClass('active');	
	});

});
