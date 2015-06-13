var c = document.getElementById("game");
var cTop = c.offsetTop;
var cLeft = c.offsetLeft;

var ctx = c.getContext("2d");

c.addEventListener('mousedown', mouseClick, false);

var consoleLog = "console.log";

//drawMenu
var machine = new Machine();
hud = new Hud();
hud.addButton(0, 600, 200, 72, "#345609");
hud.addButton(200, 600, 200, 72, "#3FF520");


//main loop
var FPS = 30;
setInterval(function() {

	
	machine.drawMachine();
	hud.drawHud();

	ctx.fillStyle = "#fff";
	ctx.font = "30px Arial";
	ctx.fillText(consoleLog,550,50);


}, 1000/FPS);





function mouseClick(){
	
	    x = event.pageX - cLeft,
        y = event.pageY - cTop;
            // Collision detection between clicked offset and element.
    	hud.elements.forEach(function(element) {
	        if (y > element.y && y < element.y + element.height 
	            && x > element.x && x < element.x + element.width) {
	        	element.clicked();
	        }
    	});

    	if(y > machine.y && y < machine.y + machine.height
    		&& x > machine.x && x < machine.x + machine.width){
    		console.log("yes");
    		machine.clicked();
    	}
    	else{
    		consoleLog = "clicked nowhere :)";
    	}
    		
}