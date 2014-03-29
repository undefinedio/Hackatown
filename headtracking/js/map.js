var mapObj = {
	init: function () {
		console.log(this);
		this.start = {
			lat : 39.016716,
			long : 125.800323
		};
		this.destionation = {
			lat : 51.198924,
			long : 4.421997
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
		initStuff();
	},
	startLoop : function () {
		setInterval(this.loop.bind(this),100);
	},
	loop : function () {
		if(this.tracking){
			var percentage = this.currentStep / this.totalSteps;
			percentage = Math.max( 0, Math.min(1, percentage) );

			var lat = this.start.lat + percentage * ( this.destionation.lat - this.start.lat );
			console.log(this.start.long, this.destionation.long);
			var long = this.start.long + percentage * ( this.destionation.long - this.start.long);

			var ang = Math.atan( (lat - this.prev_lat) / (long - this.prev_long) );
			var ang_degrees = ang * 180 / Math.PI;

			if(isNaN(ang_degrees)) ang_degrees = this.prev_degrees;
			$(".map-container").css({"-webkit-transform" : "rotate("+ (ang_degrees+90) +"deg)"});
			//console.log(lat, long);
			this.map.panTo( new google.maps.LatLng( lat , long) );
			this.currentStep++;
			this.prev_lat = lat;
			this.prev_long = long;
			this.prev_degrees = ang_degrees;
		}else{
			console.log("passed point");
			//continue missle along the path
		}
	}
}
google.maps.event.addDomListener(window, 'load', mapObj.init.bind(mapObj));