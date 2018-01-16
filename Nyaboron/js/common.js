$(function() {

	$(".slider-wrap").slideDown();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"));
	});

	$(".services-item h4").equalHeights();
	$(".news-item h4").equalHeights();
	$(".news-item p").equalHeights();
	$(".link-item").equalHeights();

	$(".popup-with-move-anim").magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	var owl = $('.sld');
		owl.owlCarousel({
		 loop: true,
		 items: 1,
		 itemClass: 'slide-wrap', 
		 nav: true,
		 navText: "",
		 });

		$('.next').on('click', function () { 
			owl.trigger('next.owl.carousel', [500]);
		}); 

		$('.prev').on('click', function () {
		 owl.trigger('prev.owl.carousel', [500]);
		 }); 

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extentions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pageim-black'],
		navbar: {
			title : "Меню"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function ()	{
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu");
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("popup-with-zoom-anim").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close
			}, 4000);
		});
		return false;
	});

});
