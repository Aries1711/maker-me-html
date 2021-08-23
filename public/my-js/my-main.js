$(document).ready(function(){

    //owl-carousel home maker-slider
    $('.home .site-main .maker-slider .owl-carousel').owlCarousel({
    	dots:true,
		loop: true,
		autoplay: false,
    	responsive:{
    		0:{
    			items:1
    		},
    		544:{
    			items:1
    		}
    	}
    })
});