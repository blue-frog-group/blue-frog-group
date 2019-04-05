jQuery(document).ready(function(){

	// jQuery Nivo Slider
		jQuery('#nivo-slider').nivoSlider({
			effect:'random', //Specify sets like: 'fold,fade,sliceDown'
			slices:40,
			animSpeed:600,
			pauseTime:3000,
			directionNav:true, //Next and Prev
			directionNavHide:false,
			controlNav:true //1,2,3...
		});

});