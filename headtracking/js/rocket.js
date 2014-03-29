function Rocket(){
	this.x =0;
	this.y =0;

	this.init();
}

Rocket.prototype.init = function(){

	this.image = new createjs.Bitmap('images/rocket.png');

	this.image.scaleX = .2;
	this.image.scaleY = .2;

	game.stage.addChild(this.image);

}

Rocket.prototype.move = function(event){
	// revert the headtracking input on the X axis
	var x = (event.x- game.width) * -1;
	this.image.x = x;
	this.image.y = event.y;
}