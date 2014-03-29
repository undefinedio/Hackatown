function Fighter(){
	this.x = 0;
	this.y =0;
}

Fighter.prototype.init = function(){
	this.image = new createjs.Bitmap('images/plane.png');
	this.image.scaleX = .2;
	this.image.scaleY = .2;
	game.stage.addChild(this.image);

}