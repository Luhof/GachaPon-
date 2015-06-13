function Machine(){
	this.image = new Image(); 
	this.image.src = 'assets/machine.png';
	this.maxScale = 2;
	this.currScale = 1;
	this.x = 0;
	this.y = 0;
	this.width = 500;
	this.height = 609;
}

Machine.prototype.drawMachine = function(){
	ctx.fillStyle = "#3498db";
	ctx.fillRect(0,0, 1024, 672);
	ctx.drawImage(this.image,0,0);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
}

Machine.prototype.clicked = function(){
	var key = Math.floor((Math.random() * 14) + 1);
	consoleLog = "machine clicked : " + key;

}