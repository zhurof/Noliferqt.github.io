$(function() {

    $('.header-search-btn').click(function(){;
        $('.header-bottom-nav').removeClass('show');
        $('.header-search-form').addClass('active');
        $('.header-close-btn').addClass('active');
        $('.header-bottom .logo').addClass('active');
        $('.alt-logo').addClass('active');
    });

    $('.header-close-btn').click(function(){;
        $('.header-bottom-nav').addClass('show');
        $('.header-search-form').removeClass('active');
        $('.header-close-btn').removeClass('active');
        $('.header-bottom .logo').removeClass('active');
        $('.alt-logo').removeClass('active');
    });

    $('.marketing-slider').slick({
        arrows: true,
        dots: true,
        prevArrow:'<span class="slider-arrow slider-arrow-left"></span>',
        nextArrow:'<span class="slider-arrow slider-arrow-right"></span>',
        dotsClass: 'slider-dots slick-dots',
        responsive: [ {
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }] 
    });

    $('.services-slider').slick({
        arrows: true,
        slidesToShow: 3,
        infinite: true,
        prevArrow:'<span class="services-arrow services-arrow-left"></span>',
        nextArrow:'<span class="services-arrow services-arrow-right"></span>',
        responsive: [ 
         {
      breakpoint: 1825,
      settings: {
        slidesToShow: 2,
        variableWidth: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        variableWidth: false
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        variableWidth: false
      }
    },
      {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        variableWidth: false
      }
    }
      ] 
    });

    //Select-open
    $('.publication-filter-btn').click(function(){;
      $('.publication-filter-btn').toggleClass('active');
      $('.publication-filter-form').toggleClass('active');
    });  


    //Select
    $('.js-example-basic-multiple').select2({
      placeholder: "Фильтр"
    });

    var mdfull = document.querySelector(".header-search-form")

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (mdfull.classList.contains("active")) {
                $('.header-search-form').removeClass('active');
                $('.header-bottom-nav').addClass('show');
                $('.header-close-btn').removeClass('active');
            }
        }
    });

    $('.mobile-menu-btn').click(function(){
        $('.mobile-list').toggleClass('active');
        $('.mobile-menu-btn').toggleClass('active');
    });

    //Popup
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true 
     });

    $('.mobile-list .open-popup-link').click(function(){
        $('.mobile-list').removeClass('active');
        $('.mobile-menu-btn').removeClass('active');
    });
 
    //Product tabs
    $('.product-tab1').click(function(){
      $('.product-tab1').addClass('active');
      $('.product-tab2').removeClass('active');
      $('.product-tab3').removeClass('active');
      $('.product-tab4').removeClass('active');
    });

    $('.product-tab2').click(function(){
      $('.product-tab2').addClass('active');
      $('.product-tab1').removeClass('active');
      $('.product-tab3').removeClass('active');
      $('.product-tab4').removeClass('active');
    });

    $('.product-tab3').click(function(){
      $('.product-tab3').addClass('active');
      $('.product-tab2').removeClass('active');
      $('.product-tab1').removeClass('active');
      $('.product-tab4').removeClass('active');
    });

    $('.product-tab4').click(function(){
      $('.product-tab4').addClass('active');
      $('.product-tab2').removeClass('active');
      $('.product-tab3').removeClass('active');
      $('.product-tab1').removeClass('active');
    });

  // Hidden/show button "on top"
  $(window).scroll(function() {
    var t = $(".topcontrol")    
    var scroll = $(window).scrollTop();

    if (scroll >= 410) {
      t.addClass("active");
    } else {
      t.removeClass("active");
    }
  });

  $('.topcontrol').click(function(){
    $('html,body').animate({scrollTop: 0 }, "slow");
    return false;
  });

  if($('#map').length){
  ymaps.ready(init);
  function init(){
    myMap = new ymaps.Map("map", {
      center: [55.66122421487457,37.538269729444295],
      zoom: 17,
      controls: ['zoomControl']
    });

    var company1 = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Витплит',
      balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/inner-page-contacts/map point.png',
        iconImageSize: [130, 130]
      });   
    myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects.add(company1);
  } 



};






});



