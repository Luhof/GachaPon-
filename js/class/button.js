function Button(x, y, width, height, color, action){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.action = action;
}

Button.prototype.clicked = function(){
	//this button switch scene
	
	game.sceneState = this.action;
	console.log("you clicked me - "+game.sceneState);
}