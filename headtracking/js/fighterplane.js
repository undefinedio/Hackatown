function Fighter(){
	this.x = 0;
	this.y =0;
	this.image = new Image();
	this.image.src = "images/plane_sprite.png";

	this.init();
}

Fighter.prototype.init = function(){

	spriteSheet = new createjs.SpriteSheet({
		// image to use
		images: [this.image],
		// width, height & registration point of each sprite
		frames: {width: 316, height: 3208},
		animations: {
			walk: [0, 5, "rotate"]
		}
	});



	this.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);



	this.bmpAnimation.gotoAndPlay("rotate");     //animate



//	this.bmpAnimation.vX = 4;
//	this.bmpAnimation.scaleX = .7;
//	this.bmpAnimation.scaleY = .7;
//	this.bmpAnimation.x = 16;
//	this.bmpAnimation.y = 32;



	this.bmpAnimation.currentFrame = 0;

	console.log(	this.bmpAnimation);

	//game.stage.addChild(this.bmpAnimation);

}