// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite= new Image(25, 25);
    this.sprite.src= 'images/enemy-bug.png';
    this.x;
    this.y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.render(dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite= new Image(25, 25);
    this.sprite.src= 'images/char-boy.png';
    this.initialLocation;
    this.x;
    this.y;
}
Player.prototype.update=function(dt){
    this.render(dt);
}

Player.prototype.render=function(){
    ctx.drawImage(this.sprite, this.x, this.y);
}

Player.prototype.handleInput=function(key){
    switch(key){
        case 'left':
            if(player.x>20){
                player.x-=95;
                player.update();
            }
            break;
        case 'up':
            if(player.y>20){
                player.y-=90;
                player.update();
            }            
            break;
        case 'right':
            if(player.x<400)
                player.x+=95;
                player.update();
            break;
        case 'down':
            if(player.y<400){
                player.y+=90;
                player.update();  
            }            
            break;

        default: return; // exit this handler for other keys
    }

    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
enemy1.x=0;
enemy1.y=60;
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var enemy5 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];
var player = new Player();
player.x=400;
player.y=400;

window.onload = function() {
    player.render();
    enemy1.render();
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
