jQuery(document).ready(function(){

	// jQuery Roundabout Plugin
		jQuery('.portfolio_rotator ul').roundabout({
			bearing: 0.0,			// The starting direction in which the Roundabout should point.
			tilt: 0.0,				// The starting angle at which the Roundabout’s plane should be tipped.
			minZ: 10,				// The lowest z-index value that a moveable item can be assigned. (Will be the z-index of the item farthest from the focusBearing.)
			maxZ: 100,				// The greatest z-index value that a moveable item can be assigned. (Will be the z-index of the item in focus.)
			minOpacity: 0.3,		// The lowest opacity value that a moveable item can be assigned. (Will be the opacity of the item farthest from the focus bearing.)
			maxOpacity: 1.0,		// The greatest opacity value that a moveable item can be assigned. (Will be the opacity of the item in focus.)
			minScale: 0.6,			// The lowest percentage of font-size that a moveable item can be assigned. (Will be the scale of the item farthest from the focus bearing.)
			maxScale: 1.0,			// The greatest percentage of font-size that a moveable item can be assigned. (Will be the scale of the item in focus.)
			duration: 600,			// The length of time (in milliseconds) that all animations take to complete by default.
			btnNext: null,			// A jQuery selector of elements that will have a click event assigned to them. On click, the Roundabout will move to the next child (counterclockwise).
			btnPrev: null,			// A jQuery selector of elements that will have a click event assigned to them. On click, the Roundabout will move to the previous child (clockwise).
			easing: 'swing',		// The easing method to be used for animations by default. jQuery comes with “linear” and “swing,” although any of the jQuery Easing plugin’s values can be used if the easing plugin is included.
			clickToFocus: true,		// When an item is not in focus, should it be brought into focus via an animation? If true, will disable any click events on elements within the moving element that was clicked. Once the element is in focus, click events will no longer be blocked.
			focusBearing: 0.0,		// The bearing at which a moving item’s position must match on the Roundabout to be considered “in focus.”
			shape: 'waterWheel',	// For use with the Roundabout Shapes plugin. Sets the shape of the path over which moveable items will travel.
			debug: false,			// Changes the HTML within moving elements into a list of information about that element. Helpful for advanced configurations.
			childSelector: 'li',	// Changes the set of elements Roundabout will look for within the holding element for moving.
			startingChild: 0,		// Starts a given child at the focus of the Roundabout. This is a zero-based number positioned in order of appearance in the HTML file.
			reflect: false			// Setting to true causes the elements to be placed around the Roundabout in reverse order. Also flips the direction of “next” and ”previous” buttons. 
		});
	
});