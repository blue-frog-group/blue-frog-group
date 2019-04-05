jQuery(document).ready(function(){

	// jQuery Anything Slider
		jQuery('#anything')
		  .anythingSlider({
		   width        : 952,
		   height       : 392,
		   startStopped : true
		  })
		  /* this code will make the caption appear when you hover over the panel
			remove the extra statements if you don't have captions in that location */
		  .find('.panel')
			.find('div[class*=caption]').css({ position: 'absolute' }).end()
			.hover(function(){ showCaptions( jQuery(this) ) }, function(){ hideCaptions( jQuery(this) ); });
		
		  showCaptions = function(el){
			var $this = el;
			if ($this.find('.caption-top').length) {
			  $this.find('.caption-top')
				.show()
				.animate({ top: 10, opacity: 0.8 }, 400);
			}
			if ($this.find('.caption-right').length) {
			  $this.find('.caption-right')
				.show()
				.animate({ right: 10, opacity: 0.8 }, 400);
			}
			if ($this.find('.caption-bottom').length) {
			  $this.find('.caption-bottom')
				.show()
				.animate({ bottom: 10, opacity: 0.8 }, 400);
			}
			if ($this.find('.caption-left').length) {
			  $this.find('.caption-left')
				.show()
				.animate({ left: 10, opacity: 0.8 }, 400);
			}
		  };
		  hideCaptions = function(el){
			var $this = el;
			if ($this.find('.caption-top').length) {
			  $this.find('.caption-top')
				.stop()
				.animate({ top: -50, opacity: 0 }, 350, function(){
				  $this.find('.caption-top').hide(); }); 
			}
			if ($this.find('.caption-right').length) {
			  $this.find('.caption-right')
				.stop()
				.animate({ right: -200, opacity: 0 }, 350, function(){
				  $this.find('.caption-right').hide(); });
			}
			if ($this.find('.caption-bottom').length) {
			  $this.find('.caption-bottom')
				.stop()
				.animate({ bottom: -50, opacity: 0 }, 350, function(){
				  $this.find('.caption-bottom').hide(); });
			}
			if ($this.find('.caption-left').length) {
			  $this.find('.caption-left')
				.stop()
				.animate({ left: -200, opacity: 0 }, 350, function(){
				  $this.find('.caption-left').hide(); });
			}
		  };
		
		  // hide all captions initially
		  hideCaptions( jQuery('#anything .panel') );
	
});