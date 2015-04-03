function Collection(name){
this.name = name;

}

Collection.prototype.check = function(type){

	catLength = 0;
	completedLength = 0;
	for(i=0; i<trinketsArray.length; i++){
		if(trinketsArray[i][3]==type) catLength++;
		if(trinketsArray[i][4]==1 && trinketsArray[i][3]==type) completedLength++;
	}
	document.getElementById(""+type+"Num").innerHTML = ""+completedLength+"/"+catLength+"";

}

