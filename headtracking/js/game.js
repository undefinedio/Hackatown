function Game(){
	this.width = 600;
	this.stage= "";
	this.init();
}

Game.prototype.init = function() {
	this.videoInput = document.getElementById('inputVideo');
	this.canvasInput = document.getElementById('inputCanvas');
	this.gc = document.getElementById('game');

	console.log(this.gc);
	this.context = this.gc.getContext('2d');

	this.setSize();

	//create createjs canvas to work with
	this.stage = new createjs.Stage("game");
	//set the game loop
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", this.gameLoop);


};

Game.prototype.setSize = function() {
	//set canvas size
	this.gc.height = window.innerHeight;
	this.gc.width = this.width;

	this.canvasInput.height = window.innerHeight;
	this.canvasInput.width = this.width;
};


Game.prototype.gameLoop = function() {
	game.stage.update();
}


var game = new Game();