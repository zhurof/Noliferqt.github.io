$(function() {


  //Overlay catalog-thumbnail
  $('.catalog-thumbnail-image, .why-doc-slide').mouseenter(function () {
    $(this).children('.thumbnail-overlay').fadeIn("fast");
  });
  $('.catalog-thumbnail-image, .why-doc-slide').mouseleave(function () {
    $(this).children('.thumbnail-overlay').fadeOut("fast");
  });

  //Fancybox catalog images and form auto-titles
  $(".link-popup, .btn-popup").fancybox({
    autoFocus:false,
    afterLoad: function( instance, slide ) {
      var model = $(slide.opts.$orig).parents('.catalog-item').find('.accent-text').text();
      var formtitle = $(slide.opts.$orig).parents('.catalog-item').find('.catalog-item-title').text();
      $(slide.$slide).find('.catalog-item-name').text(model);
      $(slide.$slide).find('.feedback-form-title').text(formtitle);
      $(slide.$slide).find('[name=theme]').val(formtitle);
    }
  });

  //Link scroll 
  $(".header-advantages .btn").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  //Input mask
  $(".msk").mask("+7(999)999-99-99"); 

  //Slick
  $('.why-doc-slider').slick({
    infinite: true,
    dots: true,
    dotsClass: 'slider-dots',
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<a href="#" class="slider-arrow slider-arrow-left"></a>',
    nextArrow: '<a href="#" class="slider-arrow slider-arrow-right"></a>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $(".advantage-items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slider-dots',
    mobileFirst: true,
    responsive: [
    {
      breakpoint: 460,
      settings: "unslick"
    }
    ]
  });


  //Scroll animation
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
  );
  wow.init();

  //Video popup
  $('.fancybox-media').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    width       : 1280,
    height      : 720,
    maxWidth    : '100%',
    maxHeight   : '100%',  
    padding     : 0,
    margin      : 0,           
    helpers : {
      media : {
        youtube : {
         params : {
           theme : 'light',
           vq    : 'hd720',
           css   : {
            'body' : 'color: #fff'
          } 
        }
      } 
    }
  }
});

  var hash = location.hash; 
  if(hash == '#autoplay'){
    $('#tinymce').find('.fancybox-media').trigger('click');
  }


});

jQuery(document).ready(function(){
  function classFunction(){
    if(jQuery('body').width()<576){ jQuery('body').addClass('h-fixed');
    }
    else{
      jQuery('.h-fixed').removeClass('h-fixed')
    }
  }  
  classFunction();
  jQuery(window).resize(classFunction);

})

//отправка форм аяксом
$('form').submit(function(e){
  var $form = $(this);
  $.ajax({
    type: $form.attr('method') || 'post',
    url: $form.attr('action'),
    data: $form.serialize()
  }).done(function() {
    location.href="success-form-send.html"
  }).fail(function() {
    location.href="error-form-send.html";
  });
  e.preventDefault(); 
});
