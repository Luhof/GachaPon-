function Hud(){

	this.elements = [];

}

Hud.prototype.addButton = function(x, y, width, height, color){
	button = new Button(x, y, width, height, color);
	this.elements.push(button);
}

Hud.prototype.drawHud = function(){
	ctx.fillStyle = "#000";
	ctx.fillRect(0,600, 1024,672);

	for(i=0; i<this.elements.length; i++){
		button = this.elements[i];
		ctx.fillStyle = button.color;
		ctx.fillRect(button.x, button.y, button.width, button.height);
	}
}