function Fighter(){
	this.x = 0;
	this.y =0;
	this.speed =  getRandom(25,35 );
	this.init();
}

Fighter.prototype.init = function(){

	var image = 'images/plane.png';
	this.plane = new createjs.Bitmap(image);

	this.plane.scaleX = 1.2;
	this.plane.scaleY = 1.2;

	this.plane.y = getRandom(-300,-900 );
	this.plane.x = getRandom(-100,game.stage.canvas.width );
	game.stage.addChild(this.plane);

}

Fighter.prototype.move = function(){
	if(this.plane.y > game.stage.canvas.height){
		this.plane.y = getRandom(-300,-900 );
		this.plane.x = getRandom(-100,game.stage.canvas.width );
		this.speed =  getRandom(10,15 );
	}else{
		this.plane.y = this.plane.y + this.speed;
	}
}