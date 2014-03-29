function initialize() {
	var destionation = {
		lat : 51.198924,
		long : 4.421997
	};
	var start = {
		lat : 39.016716,
		long : 125.800323
	};

	var totalSteps = 100;
	var currentStep = 0;

	var mapOptions = {
		center: new google.maps.LatLng( start.lat , start.long ),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	

	var prev_lat = 0;
	var prev_long = 0;

	setInterval( function()
	{	
		var percentage = currentStep / totalSteps;
		percentage = Math.max( 0, Math.min(1, percentage) );

		var lat = start.lat + percentage * ( destionation.lat - start.lat );
		var long = start.long + percentage * (destionation.long - start.long);

		var ang = Math.atan( (lat - prev_lat) / (long - prev_long) );
		var ang_degrees = ang * 180 / Math.PI;
		
		$(".map-container").css({"-webkit-transform" : "rotate("+ (ang_degrees+90) +"deg)"});
		console.log( currentStep, percentage, lat, long, ang, ang_degrees );

		map.panTo( new google.maps.LatLng( lat , long) );

		currentStep++;
		prev_lat = lat;
		prev_long = long;
	}, 100);


	return false;


	// var latDif = destionation.lat - start.lat;
	// var longDif = destionation.long - start.long;
	//console.log( Math.atan2(latDif, longDif) );
	//var degrees = Math.atan2(longDif, latDif) * 180 / Math.PI + 180;
	var degrees = angleCalc( start.long , destionation.long , start.lat, destionation.lat );
	var speedRatio = 1;
	//var degrees = 120.0001;
	var latSpeed = Math.cos(degrees * (Math.PI/180));
	var longSpeed = Math.sin(degrees * (Math.PI/180));
	console.log(latSpeed);
	console.log(longSpeed);
	$(".map-container").css({"-webkit-transform" : "rotate("+-0+"deg)"});
	console.log($(".map-container"));
	var mapOptions = {
		center: new google.maps.LatLng( start.lat , start.long ),
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var steps = 1;
	setInterval(function(){
		var newLat = start.lat + ( steps *  latSpeed * speedRatio  );
		var newLong = start.long + ( steps *  longSpeed * speedRatio );
		console.log(newLat, newLong);
		map.panTo( new google.maps.LatLng( newLat , newLong) );
		steps += 1;
	},100);
}
google.maps.event.addDomListener(window, 'load', initialize);
$(".leftright").width(Math.floor(($("body").width()-600)/2));

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function angleCalc(x1,y1,x2,y2){
	var radiaal = Math.atan( (x2-x1) / (y2-y1) );
	var angle = radiaal * ( 180 / Math.PI);
	if(angle < 0){
		angle = angle + 360;
	}
	return angle;
}