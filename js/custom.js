// header sticky
$(function () {	
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('body').addClass('sticky_header');
            $('header').addClass('sticky');
        }
        else {
            $('body').removeClass('sticky_header');
            $('header').removeClass('sticky');
        }
    });
});
// home slider 
$('.home_slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,   
});
 // technologies

 $('.technologies').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 12,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }     
      
    ]
});


 