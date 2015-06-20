function Machine(){
	this.image = new Image(); 
	this.image.src = 'assets/machine.png';
	this.maxScale = 2;
	this.currScale = 1;
	this.x = 0;
	this.y = 0;
	this.width = 500;
	this.height = 500;
	this.lastTrinket = "undefined";
}

Machine.prototype.drawMachine = function(){
	ctx.fillStyle = "#3498db";
	ctx.fillRect(0,0, 1024, 672);
	ctx.drawImage(this.image,0,0);
	//ctx.setTransform(1, 0, 0, 1, 0, 0);
}

Machine.prototype.clicked = function(){
	var key = Math.floor((Math.random() * game.trinkets.length));
	this.lastTrinket = game.trinkets[key];
	
}

Machine.prototype.drawModalBox = function(){
	ctx.fillStyle = "#c0392b"
	ctx.fillRect(600, 100, 300, 100);
	ctx.fillStyle = "#b0291b"
	ctx.fillRect(600, 200, 300, 10);
	if(this.lastTrinket != "undefined"){
		ctx.fillStyle = "#fff";
    	ctx.font = "21px Arial";
    	ctx.fillText(this.lastTrinket.name, 640, 150);
		this.lastTrinket.drawTrinket(600, 125);
	}
	
}