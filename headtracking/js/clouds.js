function Clouds(){
	this.x = 0;
	this.y = 0;
	this.speed =  getRandom(15,18 );
	this.cloud = "";
	this.init();
}

Clouds.prototype.init= function(){
//	this.cloud = new createjs.Shape();
//	this.cloud.graphics.beginFill("red").drawCircle(0, 0, 50);
	var image = 'images/cloud'+ Math.floor(getRandom(1,4 ))  +'.png';
	this.cloud = new createjs.Bitmap(image);

	this.cloud.scaleX = 1;
	this.cloud.scaleY = 1;

	this.cloud.x = getRandom(-100,game.stage.canvas.width );
	this.cloud.y = getRandom(-300,-900 );
	game.stage.addChild(this.cloud);
}

Clouds.prototype.move = function(){
	if(this.cloud.y > game.stage.canvas.height){
		this.cloud.y = getRandom(-300,-900 );
		this.cloud.x = getRandom(-100,game.stage.canvas.width );
		this.speed =  getRandom(10,15 );
	}else{
		this.cloud.y = this.cloud.y + this.speed;
	}
}