function Rocket(){
	this.x =0;
	this.y =0;

	this.baseScaleDivide = 70;

	this.init();
}

Rocket.prototype.init = function(){

	this.image = new createjs.Bitmap('images/raket.png');

	this.image.scaleX = .2;
	this.image.scaleY = .2;

	game.stage.addChild(this.image);

}

Rocket.prototype.move = function(event){
	// revert the headtracking input on the X axis
	//console.log(event.width);

	this.image.scaleX = .2 * (event.width /this.baseScaleDivide);
	this.image.scaleY = .2 * (event.width /this.baseScaleDivide);

	var x = (event.x- game.width) * -1;
	this.image.x = x;
	this.image.y = event.y;
}