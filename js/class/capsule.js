exclamationArray = ["Cool", "Oh my gosh", "Waoh", "Seriously", "Awesome", "WTF", "Just what you wanted", "You hardly believe it"];



function Capsule(color, opened){
  this.color = color;
  this.opened = false;
 }

Capsule.prototype.openCaps = function(){

var exclamation = Math.floor(Math.random()*exclamationArray.length);
var rand = Math.floor(Math.random()*trinketsArray.length);
selectedTrinket = trinketsArray[rand];
selectedTrinket[4]=1;

var isMultiple = false;
for(i=0; i<trinkets.length; i++){
		if(trinketsArray[rand][0] == trinkets[i].name && isMultiple == false){
		trinkets[i].quantity++;

		isMultiple = true;
		}
	
}
if (isMultiple == false){
	trinkets.push(new Trinket(selectedTrinket[0], selectedTrinket[1], selectedTrinket[2]));

}
	


document.getElementById("gameLog").innerHTML = "You open the "+this.color+" capsule...<br/><br/><img src='img/trinkets/32/"+selectedTrinket[2]+".png' alt='thumb'><br/>"+exclamationArray[exclamation]+", you find "+selectedTrinket[0]+" !<br/><span class='description'>"+selectedTrinket[1]+"</span>";
trinketUpdate();

collections[0].check("food");
collections[1].check("vidya");
collections[2].check("animals");



};
