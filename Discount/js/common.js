$(function() {



	//Mobile menu
	$('.mobile-menu-btn').click(function(){
		$('.mobile-menu-btn').toggleClass('active');
		$('.mobile-navigation').toggleClass('active');
		$('body').toggleClass('is-open');
	});

	//Popup call

	$('.popup-link').fancybox();

	//Toggle .select-list 
	$('.select-trigger').click(function(){
		$(this).siblings('.select-list').toggleClass('active');
		$('.select-list').not($(this).siblings()).removeClass('active');
	});
	$(document).mousedown(function(e){
		if(!$(e.target).is('.select-list,.select-trigger') && !$('.select-list').find(e.target).length){
			$('.select-list').removeClass('active');
		}
	})

	//Back to page, when .select-list "active" on Table and Mobile resolutions
	$('.select-list-navigation .navigation-back-btn').click(function(){
		$('.select-list').removeClass('active')
	})

	//Datepicker call and change local
	$('input[name="dates"]').daterangepicker({
		"parentEl": ".datepicker-list .select-list-content",
		"alwaysShowCalendars": false,
		"autoApply": true,
		"locale": {
			"format": "DD.MM.YYYY",
			"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "От",
			"toLabel": "До",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
			"вс.",
			"пн.",
			"вт.",
			"ср.",
			"чт.",
			"пт.",
			"сб."
			],
			"monthNames": [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь"
			],

			"firstDay": 1
		},
	}, function(start, end, label) {
			$('#date-from').val(start.format('DD.MM.YYYY'));
			$('#date-to').val(end.format('DD.MM.YYYY'));
		$('.select-list').removeClass('active');
		
	});


	
	//Duration and human counter
	$('.amount-field button').click(function(){
      var field = $(this).siblings('input'),
          vote = field.val();
      if($(this).is('.amount-up')){
        field.val(++vote);
      }
      if($(this).is('.amount-down')){
        field.val(--vote);
      }
    })



});
