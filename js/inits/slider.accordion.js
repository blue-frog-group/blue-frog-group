jQuery(document).ready(function(){

	// jQuery Accordion
		jQuery('#accordion').eAccordion ({
			easing: 'swing',                // Anything other than "linear" or "swing" requires the easing plugin
			autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not
			startStopped: false,            // If autoPlay is on, this can force it to start stopped
			stopAtEnd: false,				// If autoplay is on, it will stop when it reaches the last slide
			delay: 3000,                    // How long between slide transitions in AutoPlay mode
			animationTime: 600,             // How long the slide transition takes
			hashTags: true,                 // Should links change the hashtag in the URL?
			pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
			width: null,					// Override the default CSS width
			height: null,					// Override the default CSS height
			expandedWidth: '422px'			// Width of the expanded slide
		});

});