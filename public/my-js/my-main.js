$(document).ready(function(){

    //owl-carousel home maker-slider
    $('.home .site-main .maker-slider .owl-carousel').owlCarousel({
    	loop: true,
    	autoplay: true,
    	dots:true,
    	responsive:{
    		0:{
    			items:1
    		},
    		544:{
    			items:2
    		}
    	}
    })
});