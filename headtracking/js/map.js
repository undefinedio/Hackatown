var mapObj = {
	destionation: {},
	init: function () {
		this.start = {
			lat : 39.016716,
			long : 125.800323
		};
		this.mapOptions = {
			center: new google.maps.LatLng( this.start.lat , this.start.long ),
			zoom: 7,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		this.map = new google.maps.Map(document.getElementById("map-canvas"), this.mapOptions);
		this.totalSteps = 500;
		this.currentStep = 0;
		this.prev_lat = 0;
		this.prev_long = 0;
		this.prev_degrees = 0;
		this.tracking = true;
		//initStuff();
	},
	startLoop : function () {
		var overlay;
		var sizeY = 0.5;
		var sizeX = 0.4;
		var swBound = new google.maps.LatLng(this.destionation.lat-sizeX, this.destionation.long-sizeY);
		var neBound = new google.maps.LatLng(this.destionation.lat+sizeX, this.destionation.long+sizeY);
		var bounds = new google.maps.LatLngBounds(swBound, neBound);
		var srcImage = 'images/roos.png';
		overlay = new USGSOverlay(bounds, srcImage, this.map);
		setInterval(this.loop.bind(this),100);
	},
	boom : function (x , y) {
		var canvasy = Math.floor($("canvas").height()/2);
		var canvasx = 300;
	},
	loop : function () {
		if(this.tracking){
			var percentage = this.currentStep / this.totalSteps;
			percentage = Math.max( 0, Math.min(1, percentage) );

			var lat = this.start.lat + percentage * ( this.destionation.lat - this.start.lat );
			var long = this.start.long + percentage * ( this.destionation.long - this.start.long);

			var ang = Math.atan( (lat - this.prev_lat) / (long - this.prev_long) );
			var ang_degrees = ang * 180 / Math.PI;
			var angPlus = 90;
			if(this.destionation.long > this.start.long) angPlus += 180;
			if(isNaN(ang_degrees)) ang_degrees = this.prev_degrees;
			$(".map-container").css({"-webkit-transform" : "rotate("+ (ang_degrees+angPlus) +"deg)"});
			//console.log(lat, long);
			this.map.panTo( new google.maps.LatLng( lat , long) );
			this.currentStep++;
			this.prev_lat = lat;
			this.prev_long = long;
			this.prev_degrees = ang_degrees;
		}else{
			//console.log("passed point");
			//continue missle along the path
		}
	}
}
USGSOverlay.prototype = new google.maps.OverlayView();
function USGSOverlay(bounds, image, map) {
  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = mapObj.map;
  this.div_ = null;
  this.setMap(mapObj.map);
}

USGSOverlay.prototype.onAdd = function() {
	  var div = document.createElement('div');
	  div.style.borderStyle = 'none';
	  div.style.borderWidth = '0px';
	  div.style.position = 'absolute';
	  // Create the img element and attach it to the div.
	  var img = document.createElement('img');
	  img.src = this.image_;
	  img.style.width = '100%';
	  img.style.height = '100%';
	  img.style.position = 'absolute';
	  div.appendChild(img);

	  this.div_ = div;

	  // Add the element to the "overlayLayer" pane.
	  var panes = this.getPanes();
	  panes.overlayLayer.appendChild(div);
};
USGSOverlay.prototype.draw = function() {
	var overlayProjection = this.getProjection();
	var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
	var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
	var div = this.div_;
	div.style.left = sw.x + 'px';
	div.style.top = ne.y + 'px';
	div.style.width = (ne.x - sw.x) + 'px';
	div.style.height = (sw.y - ne.y) + 'px';
};
//google.maps.event.addDomListener(window, 'load', mapObj.init.bind(mapObj));