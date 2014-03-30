function Rocket(){
	this.x =0;
	this.y =0;

	this.image = new Image();
	this.image.src = "images/rocket_sprite.png";

	this.baseScaleDivide = 40;

	this.init();
}

Rocket.prototype.init = function(){

	spriteSheet = new createjs.SpriteSheet({
		// image to use
		images: [this.image],
		// width, height & registration point of each sprite
		frames: {width: 59, height: 500},
		animations: {
			walk: [0, 9, "rotate"]
		}
	});

	this.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);

	this.bmpAnimation.gotoAndPlay("rotate");     //animate

	this.bmpAnimation.direction = 90;
	this.bmpAnimation.vX = 4;
	this.bmpAnimation.scaleX = .7;
	this.bmpAnimation.scaleY = .7;
	this.bmpAnimation.x = 16;
	this.bmpAnimation.y = 32;

	this.bmpAnimation.currentFrame = 0;

	game.stage.addChild(this.bmpAnimation);

}

Rocket.prototype.move = function(event){
	if(event.width < 40) {
		alert('BOOM!');
	}
	this.bmpAnimation.scaleX = .2 * (event.width /this.baseScaleDivide);
	this.bmpAnimation.scaleY = .2 * (event.width /this.baseScaleDivide);

	// revert the headtracking input on the X axis
	var x = (event.x- game.width) * -1;

	this.bmpAnimation.x = x;
	this.bmpAnimation.y = event.y -150;
}