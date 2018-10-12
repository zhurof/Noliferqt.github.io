$(function() {

	//Slider
	$(".owl-carousel.main-slider").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 500,
		nav: true,
		dots: true,
		navText: false
	});

	//Drop-down menu
	$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

		Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
	var accordion = new Accordion($('#mobile-list'), false);
	});
	

	//EvCalendar

	$('#calendar').fullCalendar({
		dayClick: function(date, jsEvent, view) {
		var clickDate = date.format();
		$("#ev-start-date").val(clickDate);
		$( "#dialog" ).dialog( "open" );
		},
		locale: 'ru'
	});

	$('#dialog').dialog({
		autoOpen: false,
		show: {
			effect: 'drop',
			duration: 500
		},
		hide: {
			effecct: 'clip',
			duration: 500
		}
	});

	//Magnific gallery
	$('.achievement-card .card-bg').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		}
	});

	$('.project-card .card-bg').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		}
	});

	$('.about-card .card-bg').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		}
	});

	$('.about-cards-alt .about-card').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		}
	});

	$('.department-cards-alt .department-card').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		}
	});

	//Mobile menu
	$('.mobile-menu-btn').click(function(){
		$('.mobile-menu').toggleClass('active');
		$('.mobile-menu-btn').toggleClass('active');
	});

	//Elibs tab's
	$('.tab.cat1').click(function(){
		$('.tab.cat3').removeClass('active');
		$('.tab.cat2').removeClass('active');
		$('.tab.cat4').removeClass('active');
		$('.tab.cat1').addClass('active');
		$('.elibrary-cat.cat3').removeClass('active');		
		$('.elibrary-cat.cat2').removeClass('active');		
		$('.elibrary-cat.cat4').removeClass('active');		
		$('.elibrary-cat.cat1').addClass('active');		
	});

	$('.tab.cat2').click(function(){
		$('.tab.cat1').removeClass('active');
		$('.tab.cat3').removeClass('active');
		$('.tab.cat4').removeClass('active');
		$('.tab.cat2').addClass('active');
		$('.elibrary-cat.cat1').removeClass('active');		
		$('.elibrary-cat.cat3').removeClass('active');		
		$('.elibrary-cat.cat4').removeClass('active');		
		$('.elibrary-cat.cat2').addClass('active');		
	});

	$('.tab.cat3').click(function(){
		$('.tab.cat1').removeClass('active');
		$('.tab.cat2').removeClass('active');
		$('.tab.cat4').removeClass('active');
		$('.tab.cat3').addClass('active');
		$('.elibrary-cat.cat1').removeClass('active');		
		$('.elibrary-cat.cat2').removeClass('active');		
		$('.elibrary-cat.cat4').removeClass('active');		
		$('.elibrary-cat.cat3').addClass('active');		
	});

	$('.tab.cat4').click(function(){
		$('.tab.cat1').removeClass('active');
		$('.tab.cat2').removeClass('active');
		$('.tab.cat3').removeClass('active');
		$('.tab.cat4').addClass('active');
		$('.elibrary-cat.cat1').removeClass('active');		
		$('.elibrary-cat.cat2').removeClass('active');		
		$('.elibrary-cat.cat3').removeClass('active');		
		$('.elibrary-cat.cat4').addClass('active');		
	});

	//Projects tab's
	$('.tab.var1').click(function(){
		$('.tab.var3').removeClass('active');
		$('.tab.var2').removeClass('active');
		$('.tab.var4').removeClass('active');
		$('.tab.var1').addClass('active');
		$('.projects-var.var3').removeClass('active');		
		$('.projects-var.var2').removeClass('active');		
		$('.projects-var.var4').removeClass('active');		
		$('.projects-var.var1').addClass('active');		
	});

	$('.tab.var2').click(function(){
		$('.tab.var3').removeClass('active');
		$('.tab.var1').removeClass('active');
		$('.tab.var4').removeClass('active');
		$('.tab.var2').addClass('active');
		$('.projects-var.var3').removeClass('active');		
		$('.projects-var.var1').removeClass('active');		
		$('.projects-var.var4').removeClass('active');		
		$('.projects-var.var2').addClass('active');		
	});

	$('.tab.var3').click(function(){
		$('.tab.var2').removeClass('active');
		$('.tab.var1').removeClass('active');
		$('.tab.var4').removeClass('active');
		$('.tab.var3').addClass('active');
		$('.projects-var.var2').removeClass('active');		
		$('.projects-var.var1').removeClass('active');		
		$('.projects-var.var4').removeClass('active');		
		$('.projects-var.var3').addClass('active');		
	});

	$('.tab.var4').click(function(){
		$('.tab.var2').removeClass('active');
		$('.tab.var1').removeClass('active');
		$('.tab.var3').removeClass('active');
		$('.tab.var4').addClass('active');
		$('.projects-var.var2').removeClass('active');		
		$('.projects-var.var1').removeClass('active');		
		$('.projects-var.var3').removeClass('active');		
		$('.projects-var.var4').addClass('active');		
	});

	//Timetable tab's

	$('.tab.var10').click(function(){
		$('.tab.var11').removeClass('active');
		$('.tab.var12').removeClass('active');
		$('.tab.var13').removeClass('active');
		$('.tab.var10').addClass('active');
		$('.timetable-var.var2').removeClass('active');		
		$('.timetable-var.var3').removeClass('active');		
		$('.timetable-var.var4').removeClass('active');		
		$('.timetable-var.var1').addClass('active');		
	});

	$('.tab.var11').click(function(){
		$('.tab.var10').removeClass('active');
		$('.tab.var12').removeClass('active');
		$('.tab.var13').removeClass('active');
		$('.tab.var11').addClass('active');
		$('.timetable-var.var1').removeClass('active');		
		$('.timetable-var.var3').removeClass('active');		
		$('.timetable-var.var4').removeClass('active');		
		$('.timetable-var.var2').addClass('active');		
	});

	$('.tab.var12').click(function(){
		$('.tab.var10').removeClass('active');
		$('.tab.var11').removeClass('active');
		$('.tab.var13').removeClass('active');
		$('.tab.var12').addClass('active');
		$('.timetable-var.var1').removeClass('active');		
		$('.timetable-var.var2').removeClass('active');		
		$('.timetable-var.var4').removeClass('active');		
		$('.timetable-var.var3').addClass('active');		
	});

	$('.tab.var13').click(function(){
		$('.tab.var10').removeClass('active');
		$('.tab.var11').removeClass('active');
		$('.tab.var12').removeClass('active');
		$('.tab.var13').addClass('active');
		$('.timetable-var.var1').removeClass('active');		
		$('.timetable-var.var2').removeClass('active');		
		$('.timetable-var.var3').removeClass('active');		
		$('.timetable-var.var4').addClass('active');		
	});

	//Map
	ymaps.ready(init);
  var myMap,
  		myPlacemark;

  function init(){     
    myMap = new ymaps.Map("map", {
      center: [55.16159399, 30.21749350],
     	zoom: 17
    });

    myPlacemark = new ymaps.Placemark([55.16159399, 30.21749350], {  
    	hintContent: 'Центр эстетического воспитания «Маладзік»',
    	balloonContent: 'ул. В.-Интернационалистов, 19' 
    	},{
    		preset: 'islands#redDotIcon'
    	});

   	myMap.geoObjects.add(myPlacemark);
  }


});
