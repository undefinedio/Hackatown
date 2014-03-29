function initialize() {
	var destionation = {
		lat : 51.198924,
		long : 4.421997
	};
	var start = {
		lat : 39.016716,
		long : 125.800323
	};

	var totalSteps = 500;
	var currentStep = 0;

	var mapOptions = {
		center: new google.maps.LatLng( start.lat , start.long ),
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	

	var prev_lat = 0;
	var prev_long = 0;
	var prev_degrees = 0;
	var tracking = true;

	setInterval( function()
	{	
		if(tracking){
			var percentage = currentStep / totalSteps;
			percentage = Math.max( 0, Math.min(1, percentage) );

			var lat = start.lat + percentage * ( destionation.lat - start.lat );
			var long = start.long + percentage * (destionation.long - start.long);

			var ang = Math.atan( (lat - prev_lat) / (long - prev_long) );
			var ang_degrees = ang * 180 / Math.PI;

			if(isNaN(ang_degrees)) ang_degrees = prev_degrees;
			$(".map-container").css({"-webkit-transform" : "rotate("+ (ang_degrees+90) +"deg)"});
			
			map.panTo( new google.maps.LatLng( lat , long) );

			currentStep++;
			prev_lat = lat;
			prev_long = long;
			prev_degrees = ang_degrees;
		}else{
			//continue missle along the path
		}
		console.log( currentStep, percentage, lat, long, ang, ang_degrees );
	}, 100);
}
google.maps.event.addDomListener(window, 'load', initialize);