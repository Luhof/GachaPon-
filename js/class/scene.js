function Scene(name, color){
	this.name = name;
	this.backgroundColor = color;
	this.elements = [];
}

Scene.prototype.drawScene = function(){
	ctx.fillStyle = this.backgroundColor;
	ctx.fillRect(0,0, 1024,672);
}
