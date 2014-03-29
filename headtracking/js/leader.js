function Leader(){
	this.x =0;
	this.y =0;

	this.baseScaleDivide = 60;

	this.init();
}

Leader.prototype.init = function(){

	this.image = new createjs.Bitmap('images/leader.png');

	this.image.scaleX = .2;
	this.image.scaleY = .2;

	game.stageCam.addChild(this.image);

}

Leader.prototype.move = function(event){

//	this.image.scaleX = .2 * (event.width /this.baseScaleDivide);
//	this.image.scaleY = .2 * (event.width /this.baseScaleDivide);

	// revert the headtracking input on the X axis
	var x = (event.x- game.width) * -1;

	this.image.x = event.x;
	this.image.y = event.y;
}