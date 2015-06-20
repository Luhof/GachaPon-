function Inventory(){

}

Inventory.prototype.drawInventory = function(){
	ctx.fillStyle = "#d35400";
	ctx.fillRect(0,0, 1024, 672);
	//ctx.drawImage(this.image,0,0);
	//ctx.setTransform(1, 0, 0, 1, 0, 0);
}
