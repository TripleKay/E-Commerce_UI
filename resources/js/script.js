$(document).ready(function() {
    $('.mobile-menu').click(function(){
        $('.header-3-container').animate({left: '0px'},300);
        $('.mobile-close').animate({left: '90%'},400);
        $('.header-3').animate({left: '0px'},500);
    });
    $('.mobile-close').click(function(){
        $('.header-3-container').animate({left: '-800px'},500);
        $('.mobile-close').animate({left: '-300px'},400);
        $('.header-3').animate({left: '-800px'},300);
    });
    $('#category-section').waypoint(function(direction) {

        if(direction == 'down') {
            $('.header-2').addClass('fixed');
        } else {
            $('.header-2').removeClass('fixed'); 
        }
        
    },{
        offset: '150px'
    });
    $('.banner-container').owlCarousel({
        // margin:10,
        nav:true,
        dots: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1,
            },
            1200:{
                items:1
            }
        }

    })
    $('.product-container').owlCarousel({
        // margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            900:{
                items:2
            },
            1000:{
                items:3,
                nav:true,
            },
            1200:{
                items: 4
            }
        }
    })
});