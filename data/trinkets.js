//each trinket has:
//id, name, description, rarity, category


function addTrinket(name, description, rarity, category){
	id = trinkets.length+1;
	newTrinket = [id, name, description, rarity, category];
	trinkets.push(newTrinket);
}

function loadData(){
	addTrinket("piece of meat", "it runs", 1, "food");
	addTrinket("carrot", "orange as shit", 1, "food");
	addTrinket("beer", "fresh", 1, "food");
	addTrinket("soda can", "sugary", 1, "food");
	addTrinket("orange", "good morning", 1, "food");
}


