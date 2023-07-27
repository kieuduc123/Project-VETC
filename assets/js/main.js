jQuery.fn.exists = function () {
    return this.length > 0;
};

var main = {
    SliderHomePage: function () {
        $('.slider-banner').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            dots: false,
            autoplay: true
        });
        $(".list-banner-footer").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 6,
            dots: false,
            autoplay: true
        });

    },

    SlideScroll: function () {
        $("#content-1").mCustomScrollbar({
            theme: "3d",
        });
    },
    Lightgallery: function () {
        $("#lightgallery").lightGallery();
        
        $("#video-player-param").lightGallery();

    },
    Model: function () {
        $('#register-model').modal('show');
    },
    Start: function () {
        this.SliderHomePage();
        this.SlideScroll();
        this.Lightgallery();
        this.Model();
        this.Skdslider();

    }
};
$(document).ready(function () {
    main.Start();
});
jQuery('.skdslider').skdslider({
 // Delay duration between two slides
    'delay':5000, 
    'animationSpeed': 500,
    showNav: true,
    'pauseOnHover':false,
    'showPlayButton':false,
    stopSlidingAfter: false,
    
  
  });
