jQuery(document).ready(function(){

	// jQuery Coin Slider
		jQuery('#coin-slider').coinslider({
			width: 952, // width of slider panel
			height: 392, // height of slider panel
			spw: 10, // squares per width
			sph: 5, // squares per height
			delay: 3000, // delay between images in ms
			sDelay: 30, // delay beetwen squares in ms
			opacity: 1, // opacity of title and navigation
			titleSpeed: 500, // speed of title appereance in ms
			effect: 'random', // random, swirl, rain, straight
			navigation: true, // prev next and buttons
			links : true, // show images as links 
			hoverPause: true // pause on hover
		});
	
});