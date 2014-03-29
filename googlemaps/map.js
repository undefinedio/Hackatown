function initialize() {
	var speedRatio = 5;
	
	var latSpeed = 0;
	var longSpeed = -0.08;
	var degrees = 90;
	var x = Math.cos(degrees);
	var y = Math.sin(degrees);
	console.log(x);
	console.log(y);
	var mapOptions = {
	  center: new google.maps.LatLng(39.016716 , 125.800323),
	  zoom: 5,
	  mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    var latLong = {
    	lat : 39.016716,
    	long : 125.800323
    }
    setInterval(function(){
    	latLong.lat = latLong.lat + latSpeed * speedRatio;
    	latLong.long = latLong.long + longSpeed * speedRatio;
    	map.panTo(new google.maps.LatLng( latLong.lat , latLong.long));
    },100);
}
google.maps.event.addDomListener(window, 'load', initialize);
$(".leftright").width(Math.floor(($("body").width()-600)/2));