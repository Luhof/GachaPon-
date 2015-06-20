var c = document.getElementById("game");
var cTop = c.offsetTop;
var cLeft = c.offsetLeft;
var ctx = c.getContext("2d");
if (window.devicePixelRatio > 1) {
    var canvasWidth = c.width;
    var canvasHeight = c.height;

    c.width = canvasWidth * window.devicePixelRatio;
    c.height = canvasHeight * window.devicePixelRatio;
    c.style.width = canvasWidth;
    c.style.height = canvasHeight;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}
//var trinkets = [];





function Game(){
    this.machine = new Machine();
    this.hud = new Hud();
    this.trinkets = [];
    this.inventory = new Inventory;

    this.sceneState = "machine";
}

Game.prototype.init = function(){
    
    c.addEventListener('mousedown', mouseClick, false);
    loadTrinkets();

    setInterval(update, 1000/30);
}

function update(){

    switch(game.sceneState){
        case "machine" :
            game.machine.drawMachine();
            game.machine.drawModalBox();
        break;
        case "inventory" :
            game.inventory.drawInventory();
        break;
    }

    
    game.hud.drawHud();
}

Game.prototype.clickHandler = function(x, y){
    
        y += window.pageYOffset;
        // Collision detection between clicked offset and element.
        this.hud.buttons.forEach(function(element) {
            if (y > element.y && y < element.y + element.height 
                && x > element.x && x < element.x + element.width) {
                element.clicked();
            }
        });
        console.log(x + " - " + y);
        if(y > this.machine.y && y < this.machine.y + this.machine.image.height
            && x > this.machine.x && x < this.machine.x + this.machine.width){
            this.machine.clicked();
        }
            
}

function mouseClick(){
	    x = event.clientX - cLeft,
        y = event.clientY - cTop;
        game.clickHandler(x, y);
}


var game = new Game();
game.init();



