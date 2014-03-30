function Tracker(){
	//start headtracking
	this.htracker = new headtrackr.Tracker();
	this.htracker.init(game.videoInput, game.canvasInput);
	this.htracker.start();
	this.Update();
}

Tracker.prototype.Update = function(){
	document.addEventListener("facetrackingEvent", function( event ) {
		rocket.move(event);
	});
	document.addEventListener('headtrackrStatus', 
	  function (event) {
	    if(event.status == "found"){
	    	perm = true;
	    	permTrue();
	    } 
	    
	  }
	);
}