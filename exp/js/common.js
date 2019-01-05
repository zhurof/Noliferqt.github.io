$(function() {

    //Phone-mask
    $(".msk").mask("+7(999)999-99-99"); 

    //Blog tabs
    $('.blog-tab1').click(function(){
      $('.blog-tab1').addClass('active');
      $('.blog-tab2').removeClass('active');
      $('.blog-tab3').removeClass('active');
      $('.blog-tab4').removeClass('active'); 
    });

    $('.blog-tab2').click(function(){
      $('.blog-tab2').addClass('active');
      $('.blog-tab1').removeClass('active');
      $('.blog-tab3').removeClass('active');
      $('.blog-tab4').removeClass('active'); 
    });

    $('.blog-tab3').click(function(){
      $('.blog-tab3').addClass('active');
      $('.blog-tab1').removeClass('active');
      $('.blog-tab2').removeClass('active');
      $('.blog-tab4').removeClass('active'); 
    });

    $('.blog-tab4').click(function(){
      $('.blog-tab4').addClass('active');
      $('.blog-tab2').removeClass('active');
      $('.blog-tab3').removeClass('active');
      $('.blog-tab1').removeClass('active'); 
    });

  //Blog cards
  $('.blog-tab1').click(function(){
    $('.blog-card.var1').addClass('active');
    $('.blog-card.var2').addClass('active');
    $('.blog-card.var3').addClass('active');
    $('.blog-card.var4').addClass('active');
  });

  $('.blog-tab2').click(function(){
    $('.blog-card.var1').addClass('active');
    $('.blog-card.var2').removeClass('active');
    $('.blog-card.var3').removeClass('active');
    $('.blog-card.var4').removeClass('active');
  });

  $('.blog-tab3').click(function(){
    $('.blog-card.var1').removeClass('active');
    $('.blog-card.var2').addClass('active');
    $('.blog-card.var3').removeClass('active');
    $('.blog-card.var4').removeClass('active');
  });

  $('.blog-tab4').click(function(){
    $('.blog-card.var1').removeClass('active');
    $('.blog-card.var4').addClass('active');
    $('.blog-card.var3').removeClass('active');
    $('.blog-card.var2').removeClass('active');
  });
  //Yandex map
  if($('#map').length){
    ymaps.ready(init);
    function init(){
      myMap = new ymaps.Map("map", {
        center: [55.66111006909085,37.53859249999997],
        zoom: 17,
        controls: ['zoomControl']
      });

      var company1 = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'НОЦ "ЭКСПЕРТ"',
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/locat-icon.png',
        iconImageSize: [25, 35]
      });   
      myMap.geoObjects.add(company1);
    } 
  };
  //Intro slider
  $('.intro-slider').slick({
    items: 1,
    arrows: true,
    dots: true,
    dotsClass: 'slider-dots',
    prevArrow: '<button class="slider-arrow slide-arrow-left"></button>',
    nextArrow: '<button class="slider-arrow slide-arrow-right"></button>',
    adaptiveHeight: true
  });

  //Header search
  $('.btn-search').click(function(){
    $('.header-search').addClass('active');
    $('.header-close-btn').addClass('active');
  });

  $('.header-close-btn').click(function(){
    $('.header-search').removeClass('active');
    $('.header-close-btn').removeClass('active');
  });


  //ScrollMagis
  $(window).on("load",function(){
    $(".study-right-side").mCustomScrollbar({
      axis:"x",
      theme: "dark-3",
      autoExpandScrollbar:true,
      scrollbarPosition: "outside",
      mouseWheel: false,
      advanced:{autoExpandHorizontalScroll:true}
    });
  });

  $(window).on("load",function(){
    $(".chat-body").mCustomScrollbar({
      axis:"y",
      theme: "dark-3",
      scrollbarPosition: "outside"
    });
  });



  //Mobile menu
  $('.navobile-navigation').navobile({
    'content': '#content-wrap',
    'direction': 'ltr',
    'openOffset': '-80%'
  });

  //Datepicker
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true
  });
  $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

  //Schedule drop-down list
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

  var accordion = new Accordion($('#cathegory-list'), false);
  var accordion = new Accordion($('#location-list'), false);
  var accordion = new Accordion($('#brand-list'), false);
  });

  //webinar-video
  $('.webinar-video-box .play-control').click(function(){
    $('.webinar-video-box .play-control').toggleClass('active');
  });
  //Mobile btn
  $('.mobile-menu-btn').click(function(){
    $('.mobile-menu-btn').toggleClass('active');
  });

  //Popup
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true 
  });

  // User cabinet tabs mobile
  var tabs = $('.tabs');
  var items = $('.tabs').find('a').length;
  var selector = $(".tabs").find(".selector");
  var activeItem = tabs.find('.active');
  var activeWidth = activeItem.innerWidth();
  $(".selector").css({
    "left": activeItem.position.left + "px", 
    "width": activeWidth + "px"
  });

  $(".tabs").on("click","a",function(){
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
      "left":itemPos.left + "px", 
      "width": activeWidth + "px"
    });
  });

  //User cabinet tabs
  var changer =  $(".tabs li a");  
  changer.click(function() {
    var content = this.hash.replace('/','');
    changer.removeClass("active");
    $(this).addClass("active");
    $(".tabs-content").hide();
    $(content).fadeIn(600);
  });

  //Webinar chat tabs
  var chattab =  $(".inner-blog-tab");  
  chattab.click(function() {
    var content = this.hash.replace('/','');
    chattab.removeClass("active");
    $(this).addClass("active");
    $(".inner-blog-tab-content").hide();
    $(content).fadeIn(600);
  });

  //Inner-blog chat tabs
  var blogtab =  $(".webinar-chat .chat-tab");  
  blogtab.click(function() {
    var content = this.hash.replace('/','');
    blogtab.removeClass("active");
    $(this).addClass("active");
    $(".chat-tab-content").hide();
    $(content).fadeIn(600);
  });


  //Login forms
  $('.authorize-form .reg-link').click(function(){
    $('#reg-form').addClass('active');
    $('#authorize-form').removeClass('active');
  });

  $('.authorize-form .login-link').click(function(){
    $('#authorize-form').addClass('active');
    $('#reg-form').removeClass('active');
  });


  $('.amount-field button').click(function(){
      var field = $(this).siblings('input'),
          vote = field.val();
      if($(this).is('.amount-up')){
        field.val(++vote);
      }
      if($(this).is('.amount-down')){
        field.val(--vote);
      }
      if(vote<0){
        field.css('color','#c41137');
      }else{
        field.css('color','#009900');
      }
    })
  

});

//ensure 'endDate' in config is in the future for the timer to appear

$(function(){
  function timer(settings){
    var config = {
      endDate: '2019-05-19 09:00',
      timeZone: 'Europe/Dublin',
      hours: $('#hours'),
      minutes: $('#minutes'),    
      seconds: $('#seconds'),
      newSubMessage: 'and should be back online in a few minutes...'
    };
    function prependZero(number){
      return number < 10 ? '0' + number : number;
    }
    $.extend(true, config, settings || {});
    var currentTime = moment();
    var endDate = moment.tz(config.endDate, config.timeZone);
    var diffTime = endDate.valueOf() - currentTime.valueOf();
    var duration = moment.duration(diffTime, 'milliseconds');
    var days = duration.days();
    var interval = 1000;
    var subMessage = $('.sub-message');
    var clock = $('.clock');
    if(diffTime < 0){
      endEvent(subMessage, config.newSubMessage, clock);
      return;
    }
    if(days > 0){
      $('#days').text(prependZero(days));
      $('.days').css('display', 'inline-block');
    }
    var intervalID = setInterval(function(){
      duration = moment.duration(duration - interval, 'milliseconds');
      var hours = duration.hours(),
      minutes = duration.minutes(),
      seconds = duration.seconds();
      days = duration.days();
      if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
        clearInterval(intervalID);
        endEvent(subMessage, config.newSubMessage, clock);
        window.location.reload();
      }
      if(days === 0){
        $('.days').hide();
      }
      $('#days').text(prependZero(days));
      config.hours.text(prependZero(hours));
      config.minutes.text(prependZero(minutes));
      config.seconds.text(prependZero(seconds));
    }, interval);
  }
  function endEvent($el, newText, hideEl){
    $el.text(newText);
    hideEl.hide();
  }
  timer();
});






//Vacancy tabs
$(document).ready(function () {
  $('.sub > a').click(function(){
    $('.sub div').slideUp();
    if ($(this).next().is(":visible")){
     $(this).next().slideUp();
   } else {
     $(this).next().slideToggle();
   }
   return false;
 });
  $('.vacancy-menu > ul > li > a').click(function(){
   $(this).toggleClass('active');
 }),
  $('.sub ul li a').click(function(){
   $('.sub ul li a').removeClass('active');
   $(this).addClass('active');
 });
});





