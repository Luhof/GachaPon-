function Hud(){

	this.buttons = [];
	this.addButton(0, 600, 200, 72, "#345609", "machine");
	this.addButton(200, 600, 200, 72, "#3FF520", "inventory");

}

Hud.prototype.addButton = function(x, y, width, height, color, action){
	button = new Button(x, y, width, height, color, action);
	this.buttons.push(button);
}

Hud.prototype.drawHud = function(){
	ctx.fillStyle = "#000";
	ctx.fillRect(0,600, 1024,672);

	for(i=0; i<this.buttons.length; i++){
		button = this.buttons[i];
		ctx.fillStyle = button.color;
		ctx.fillRect(button.x, button.y, button.width, button.height);
		ctx.fillStyle = "#fff";
    	ctx.font = "15px Arial";
    	ctx.fillText(button.action, button.x+20, button.y+20);

	}
}