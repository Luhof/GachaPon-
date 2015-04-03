/*

Feel free to check my code, use it and modify it,
but don't claim that it's yours and don't make money out of it.

Anyway, for now this is one hell of a mess right here.
Be careful, cleaning my code isn't my priority yet ;)


*/

inventory = [];
trinkets = [];

collections = [];

for(i=0; i<4; i++){
	collections[i] = new Collection();
}

collections[0].check("food");
collections[1].check("vidya");
collections[2].check("animals");


var boughtCaps = 0;

var h=document.getElementById("machine");
var inventoryDiv = document.getElementById("inventory");

h.onclick = function machineClick(){

	boughtCaps++;
	document.getElementById("gameLog").innerHTML = "Gacha Gacha Pon ! You just bought 1 capsule.<br/>Total capsules bought : "+boughtCaps+"";

	var randColor = Math.floor(Math.random()*4);

	switch(randColor){

		case 0:
		color = "blue";
		break;
		case 1:
		color = "red";
		break;
		case 2:
		color = "yellow";
		break;
		case 3:
		color = "green";
		break;
		default :
		color = "green";
		break;
	}

	var newCaps = new Capsule(color);
	inventory.push(newCaps);
	InventoryUpdate();

}



function capsClick(i){

	inventory[i].openCaps();
	inventory[i].opened = true;
	InventoryUpdate();
}

function InventoryUpdate(){

	var objTo = document.getElementById('inventory');
	objTo.innerHTML = "";

	for(i=0; i<inventory.length; i++){

		if(inventory[i].opened == false){

		var divtest = document.createElement("div");
		divtest.setAttribute("class", "caps");
		divtest.setAttribute("onclick", "capsClick("+i+")");
		divtest.innerHTML = "<img src='img/caps/32/"+inventory[i].color+".png' alt='cap'/>";
		objTo.appendChild(divtest);
		}

	}


}

function trinketUpdate(){

	var objTo = document.getElementById('trinkets');
	objTo.innerHTML = "";

	for(i=0; i<trinkets.length; i++){

		var divtest = document.createElement("div");
		divtest.setAttribute("class", "trinkets");
		divtest.setAttribute("title", trinkets[i].description);
		divtest.innerHTML = "<img src='img/trinkets/32/"+trinkets[i].url+".png' alt='trinket'/>"+trinkets[i].quantity+"";
		objTo.appendChild(divtest);

	}


}


function displayHud(newId){
	document.getElementById("game").style.display = 'none';
	document.getElementById("updateLog").style.display = 'none';
	document.getElementById(newId).style.display = 'block';
}