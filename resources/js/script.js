$(document).ready(function() {
    // $('.all-cat-btn').click(function(){
    //     $('.all-cat-menu').toggleClass('show');
    // });
    // $('.cat-item').click(function(){
    //     $('.cat-item').toggleClass('active');
    // });
    $('.product-container').owlCarousel({
        // margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4,
                nav:true,
            }
        }
    })
});