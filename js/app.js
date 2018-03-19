// Enemies our player must avoid
const Enemy = function() {
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
    function xCheck(x){
        if (x<500){
            return true;
        } else {
            return false;     
        }       
    }

//handles the update of vehicles at different speeds

    switch(this.speed){
        case 1:
            if(xCheck(this.x)){
                this.x+=2;
            }else {
                this.x=0
            }
            break;
        case 2:
            if(xCheck(this.x)){
                this.x+=2;
            }else {
                this.x=0
            }
            break;
        case 3:
            if(xCheck(this.x)){
                this.x+=3;
            }else {
                this.x=0
            }
            break;
        case 4:
            if(xCheck(this.x)){
                this.x+=4;
            }else {
                this.x=0
            }
            break;
        case 5:
            if(xCheck(this.x)){
                this.x+=5;
            }else {
                this.x=0
            }
            break;
    }

    collisionCheck();
    this.render(dt);
};

function collisionCheck (){
    allEnemies.forEach(function(enemy) {
        if((player.x>=(enemy.x-15) && player.x<=(enemy.x+25))&&(player.y===enemy.y)) {
            player.x=200;
            player.y=400;
            player.update();
        }
    });
    
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    this.sprite= new Image(25, 25);
    this.sprite.src= 'images/char-boy.png';
    this.x;
    this.y;
}

Player.prototype.update=function(dt){
    this.render();
    win();
}


function win(){
    if(player.y<40){
        $('.checkMarkContainer').removeClass('hiddenItems');
        $('.winPar').text(`Congratulations! You won.`);
        $('.winParContainer').removeClass('hiddenItems');
        const canvas=$('canvas');
        canvas.addClass('hiddenItems');
    }    
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

const enemy1 = new Enemy();
enemy1.x=5;
enemy1.y=40;
enemy1.speed=1;

const enemy2 = new Enemy();
enemy2.x=120;
enemy2.y=130;
enemy2.speed=3;

const enemy3 = new Enemy();
enemy3.speed=2;
enemy3.x=0;
enemy3.y=130;

const enemy4 = new Enemy();
enemy4.speed=4;
enemy4.x=220;
enemy4.y=40;

const enemy5 = new Enemy();
enemy5.speed=3;
enemy5.x=0;
enemy5.y=220;

let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];

const player = new Player();
player.x=200;
player.y=400;

window.onload = function updatePlayers() {
    player.update();
    allEnemies.forEach(function(enemy) {
        enemy.render();
    });
      
};