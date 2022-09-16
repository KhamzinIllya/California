$(document).ready(function(){

    $( function() {
        $( "#accordion" ).accordion();
    } );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed: 1000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            },

        }
    });
});