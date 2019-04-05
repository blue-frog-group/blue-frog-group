/**
 * <span class="goog_qs-tidbit goog_qs-tidbit-0">$.include - script inclusion jQuery plugin
 * Based on idea from http://www.gnucitizen.org/projects/jquery-include/
 * @author Tobiasz Cudnik</span>
 * @link http://meta20.net/.include_script_inclusion_jQuery_plugin
 * @license MIT
 */
// overload jquery's onDomReady
if ( jQuery.browser.mozilla || jQuery.browser.opera ) {
        document.removeEventListener( "DOMContentLoaded", jQuery.ready, false );
        document.addEventListener( "DOMContentLoaded", function(){ jQuery.ready(); }, false );
}
jQuery.event.remove( window, "load", jQuery.ready );
jQuery.event.add( window, "load", function(){ jQuery.ready(); } );
jQuery.extend({
        includeStates: {},
        include: function(url, callback, dependency){
                if ( typeof callback != 'function' && ! dependency ) {
                        dependency = callback;
                        callback = null;
                }
                url = url.replace('\n', '');
                jQuery.includeStates[url] = false;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function () {
                        jQuery.includeStates[url] = true;
                        if ( callback )
                                callback.call(script);
                };
                script.onreadystatechange = function () {
                        if ( this.readyState != "complete" && this.readyState != "loaded" ) return;
                        jQuery.includeStates[url] = true;
                        if ( callback )
                                callback.call(script);
                };
                script.src = url;
                if ( dependency ) {
                        if ( dependency.constructor != Array )
                                dependency = [dependency];
                        setTimeout(function(){
                                var valid = true;
                                $.each(dependency, function(k, v){
                                        if (! v() ) {
                                                valid = false;
                                                return false;
                                        }
                                })
                                if ( valid )
                                        document.getElementsByTagName('head')[0].appendChild(script);
                                else
                                        setTimeout(arguments.callee, 10);
                        }, 10);
                }
                else
                        document.getElementsByTagName('head')[0].appendChild(script);
                return function(){
                        return jQuery.includeStates[url];
                }
        },
        readyOld: jQuery.ready,
        ready: function () {
                if (jQuery.isReady) return;
                imReady = true;
                $.each(jQuery.includeStates, function(url, state) {
                        if (! state)
                                return imReady = false;
                });
                if (imReady) {
                        jQuery.readyOld.apply(jQuery, arguments);
                } else {
                        setTimeout(arguments.callee, 10);
                }
        }
});

///// include js files ////////////
$.include('js/cufon/cufon-yui.js');
$.include('js/cufon/FrancophilSans_500-FrancophilSans_700.font.js');
$.include('js/jquery.easing.1.3.js');

jQuery(function(){

	// Dropdown Menu Plugin
	if (jQuery(".ddsmoothmenu").length) {
		$.include('js/ddsmoothmenu.js');
	}

	// jQuery flexible columns
	if (jQuery("#fsb, .column").length) {
		$.include('js/jquery.flexibleColumns.min.js');
		$.include('js/inits/flexibleColumns.js');
	}

	// jQuery Cycle
	if (jQuery(".widget_recent_projects").length) {
		$.include('js/jquery.cycle.all.min.js');
		$.include('js/inits/jquery.cycle.js');
	}

	// jQuery PrettyPhoto
	if (jQuery("a[data-rel^='prettyPhoto']").length) {
		$.include('js/jquery.prettyPhoto.js');
	}

	// jQuery Tinycarousel
	if (jQuery("#slider-code").length) {
		$.include('js/jquery.tinycarousel.js');
		$.include('js/inits/tinycarousel.js');
	}

	// jQuery tipsy
	if (jQuery(".social").length) {
		$.include('js/jquery.tipsy.js');
	}

	// jQuery Watermark Plugin
	if (jQuery(".widget_search").length) {
		$.include('js/jquery.watermarkinput.js');
	}

	if (jQuery(".gototop").length) {
		$.include('js/jquery.localscroll-min.js');
		$.include('js/jquery.scrollTo-min.js');
	}
	
	// Contact Form Plugin
	if (jQuery("#contact").length) {
		$.include('js/jquery.jigowatt.js');
	}

	// jQuery Uniform Plugin
	if (jQuery("select, input:checkbox, input:radio").length) {
		$.include('js/jquery.uniform.min.js');
	}

// ========================================= Sliders ===================================================

	// jQuery Roundabout Plugin
	if (jQuery("#roundabout").length) {
		$.include('sliders/roundabout-slider/jquery.roundabout.js');
		$.include('sliders/roundabout-slider/jquery.roundabout-shapes.min.js');
		$.include('js/inits/slider.roundabout.js');
	}

	// jQuery Roundabout Plugin for portfolio page
	if (jQuery(".portfolio_rotator").length) {
		$.include('sliders/roundabout-slider/jquery.roundabout.js');
		$.include('sliders/roundabout-slider/jquery.roundabout-shapes.min.js');
		$.include('js/inits/portfolio.rotator.js');
	}

	// jQuery Accordion
	if (jQuery("#accordion").length) {
		$.include('sliders/accordion-slider/jquery.elegantAccordion.js');
		$.include('js/inits/slider.accordion.js');
	}

	// jQuery Nivo Slider
	if (jQuery("#nivo-slider").length) {
		$.include('sliders/nivo-slider/jquery.nivo.slider.js');
		$.include('js/inits/slider.nivo.js');
	}

	// jQuery Coin Slider
	if (jQuery("#coin-slider").length) {
		$.include('sliders/coin-slider/coin-slider.js');
		$.include('js/inits/slider.coin.js');
	}

	// jQuery Anything Slider
	if (jQuery("#anything").length) {
		$.include('sliders/anything-slider/jquery.anythingslider.js');
		$.include('sliders/anything-slider/flashobject.js');
		$.include('js/inits/slider.any.js');
	}

	// 3D Piecemaker Slider
	if (jQuery("#piecemaker").length) {
      $.include('piecemaker/scripts/swfobject/swfobject.js');
      $.include('js/inits/slider.piecemaker.js');
	}

	// jQuery Orbit Slider
	if (jQuery("#orbit-slider").length) {
		$.include('sliders/orbit-slider/jquery.orbit.js');
		$.include('js/inits/slider.orbit.js');
	}

	// jQuery Serie3 Slider
	if (jQuery("#s3slider").length) {
		$.include('sliders/serie3-slider/s3Slider.js');
		$.include('js/inits/slider.serie3.js');
	}

	// Scripts Initials
	if (jQuery("body").length) {
		$.include('js/common.js');
	}
});