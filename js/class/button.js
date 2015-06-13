function Button(x, y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}

Button.prototype.clicked = function(){
	//this button switch scene
	console.log("you clicked me");
}