function Trinkets(){
	this.id = 0;
	this.image = new Image(); 
	this.name = "undefined";
	this.description = "undefined";
	this.rarity = 1;
	this.category = "undefined";
	this.seen = false;
	this.has = false;
}

function addTrinket(name, image, description, rarity, category){
	id = game.trinkets.length+1;
	newTrinket = new Trinkets;
	newTrinket.id = id;
	newTrinket.name = name;
	newTrinket.image.src = "assets/trinkets/"+image;
	newTrinket.description = description;
	newTrinket.rarity = rarity;
	newTrinket.category = category;
	game.trinkets.push(newTrinket);
}

function loadTrinkets(){
	addTrinket("piece of meat", "sample.png", "it runs", 1, "food");
	addTrinket("carrot", "sample.png", "orange as shit", 1, "food");
	addTrinket("beer", "sample.png", "fresh", 1, "food");
	addTrinket("soda can","sample.png", "sugary", 1, "food");
	addTrinket("orange","sample.png", "good morning", 1, "food");
}

Trinkets.prototype.drawTrinket = function(x, y){
	ctx.drawImage(this.image, x, y);
}