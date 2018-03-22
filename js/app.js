'use strict';
// Enemies our player must avoid
const Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    if(this.x<500){
        this.x += this.speed*dt;
    } else {
        this.x=0;
    }
    this.collisionCheck();
};

Enemy.prototype.collisionCheck=function (){
       if((player.x>=(this.x-15) && player.x<=(this.x+25))&&(player.y===this.y)) {
            player.x=200;
            player.y=400;            
        }    
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x,y) {
    this.sprite= 'images/char-boy.png';
    this.x=x;
    this.y=y;
};

Player.prototype.update=function(){
    this.win();
};

Player.prototype.win=function(){
    if(this.y<40){
        $('.checkMarkContainer').removeClass('hiddenItems');
        $('.winPar').text(`Congratulations! You won.`);
        $('.winParContainer').removeClass('hiddenItems');
        const canvas=$('canvas');
        canvas.addClass('hiddenItems');
    }    
};

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput=function(key){
    switch(key){
        case 'left':
            if(this.x>20){
                this.x-=95;                             
            }
            break;
        case 'up':
            if(this.y>20){
                this.y-=90;                          
            }            
            break;
        case 'right':
            if(this.x<390){
                this.x+=95;                          
            }
            break;
        case 'down':
            if(this.y<400){
                this.y+=90;                         
            }            
            break;

        default: return; // exit this handler for other keys
    }    
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy(5,40,85);

const enemy2 = new Enemy(120,130,80);

const enemy3 = new Enemy(0,130,150);

const enemy4 = new Enemy(220,40,100);

const enemy5 = new Enemy(0,220,90);

const allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];

const player = new Player(200,400);