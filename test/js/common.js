$(function() {

  $('.intro-slider').slick({
    arrows: true,
    fade: true,
    dotsClass: 'slider-dots',
    prevArrow: '<button class="slider-arrow slide-arrow-left"></button>',
    nextArrow: '<button class="slider-arrow slide-arrow-right"></button>',
    asNavFor: '.slider-nav',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }
    ]
  });

  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    variableWidth: true,
    asNavFor: '.intro-slider',
    focusOnSelect: true
  });


  $('.btn-preload').on('click', function () {
    var $el = $('.intro-slider');
    var $bt = $('.btn-preload')
    var $nw = $('.slider-nav-wrap')
    setTimeout(function () {
        $bt.remove();
        $el.removeClass('hidden');
        $nw.removeClass('hidden');
    }, 5000);
});

});
