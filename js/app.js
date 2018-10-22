// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.blockWidth = 101;
    this.speed = speed;
    this.x = x;
    this.y = y + 60;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.blockWidth*5){
        this.x += this.speed * dt;
    } else {
        this.x = -this.blockWidth;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Hero = function(){
    this.blockWidth = 101;
    this.blockHeight = 83;
    this.x = this.blockWidth*2;
    this.y = this.blockHeight*5 - 10;
    this.sprite = 'images/char-boy.png';
}

Hero.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

Hero.prototype.handleInput = function(input){
    switch(input){
        case 'left':
            if(this.x > 0) {
                this.x -= this.blockWidth;
            }
            break;
        case 'up':
            if(this.y > this.blockHeight){
                this.y -= this.blockHeight;
            }
                break;
        case 'right':
            if(this.x < this.blockWidth*4) {
                this.x += this.blockWidth;
            }
            break;
        case 'down':
            if(this.y < this.blockHeight*4){
                this.y += this.blockHeight;
            }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Hero();
var enemy1 = new Enemy(-101,0,250);
var enemy2 = new Enemy(-101,83,200);
var enemy3 = new Enemy((-101*2),0,300);
var enemy4 = new Enemy(-101,166,350);

var allEnemies = [];

allEnemies.push(enemy1,enemy2,enemy3,enemy4);
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
