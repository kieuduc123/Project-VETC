jQuery.fn.exists = function () {
    return this.length > 0;
};

var main = {
    SlideScroll: function () {
        $("#content-1").mCustomScrollbar({
            scrollButtons: {enable: true},
            theme: "3d",
            scrollbarPosition: "outside"
        });
    },
    SliderHomePage: function () {
        $('.list-partner').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 6,
            dots: false,
            autoplay: true
        });

        $('.slider-banner').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            dots: false
        });
    },

    Lightgallery: function () {
        $("#lightgallery").lightGallery();
        $("#video-player-param").lightGallery();

    },
    Model: function () {
        $('#register-model').modal('show');
    },

    Hover: function () {
        $(".nav-item").hover(function () {
            $(this).addClass('show');
            $(this).children(".dropdown-menu").addClass('show');
        }, function () {
            $(this).removeClass('show');
            $(this).children(".dropdown-menu").removeClass('show');
        });
    },

    Start: function () {
        this.SliderHomePage();
        this.SlideScroll();
        this.Hover();
        this.Lightgallery();
        this.Model();
        this.Skdslider();

    }
};
$(document).ready(function () {
    main.Start();
});
jQuery('#skdslider').skdslider({

    // Delay duration between two slides
    'delay':5000, 
    'animationSpeed': 500,
  
    // Show navigation
    showNav: true,
  
    // 'showNextPrev': true, 
    // 'numericNav': false,
  
    // Enable auto play
    // 'autoSlide': true,
  
    // // Pause on hover
    'pauseOnHover':false,
  
    // // Show play button
    'showPlayButton':false,
  
    // // Stop sliding when reaching the last slide
    stopSlidingAfter: false,
    
    // animationType: 'fading',
    
    // // Selector of slides
    //slideSelector: '.slide',
    
    // // Active class
    // activeClass: 'active',
    
    // callback
   // onMarkup: function() {},
//   
  });

new WOW().init();

