jQuery(document).ready(function(){

	// 3D Piecemaker Slider
      var flashvars = {};
      flashvars.cssSource = "piecemaker/piecemaker.css";
      flashvars.xmlSource = "piecemaker/piecemaker.xml";
		
      var params = {};
      params.play = "true";
      params.menu = "false";
      params.scale = "showall";
      params.wmode = "transparent";
      params.allowfullscreen = "true";
      params.allowscriptaccess = "always";
      params.allownetworking = "all";
	  
      swfobject.embedSWF('piecemaker/piecemaker.swf', 'piecemaker', '1000', '600', '10', null, flashvars,    
      params, null);
	
});