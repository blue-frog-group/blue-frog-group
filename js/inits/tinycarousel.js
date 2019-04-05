jQuery(document).ready(function(){
	
	// jQuery text slide up / slide down effect
	jQuery.fn.showFeatureText = function() {
	  return this.each(function(){    
		var box = jQuery(this);
		var text = jQuery('h4',this);    
	
		text.css({ position: 'absolute', bottom: '0px' }).hide();
	
		box.hover(function(){
		  text.slideDown("fast");
		},function(){
		  text.slideUp("fast");
		});
	
	  });
	}
		
	// jQuery text slide up / slide down effect
	jQuery('#slider-code .overview li').showFeatureText();
	
	// jQuery Tinycarousel
	jQuery('#slider-code').tinycarousel({
		start: 2, // where should the carousel start?
		display: 4, // how many blocks do you want to move at 1 time?
		axis: 'x', // vertical or horizontal scroller? ( x || y ).
		controls: true, // show left and right navigation buttons.
		pager: false, // is there a page number navigation present?
		interval: false, // move to another block on intervals.
		intervaltime: 3000, // interval time in milliseconds.
		rewind: false, // If interval is true and rewind is true it will play in reverse if the last slide is reached.
		animation: true, // false is instant, true is animate.
		duration: 1000, // how fast must the animation move in ms?
		callback: null // function that executes after every move
	});

});