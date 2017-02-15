var level = 0;
var x;
var y;
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = this.speed1();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.speed1 = function() {
    return Math.floor(Math.random() * 100 + 200);
};
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500)
        this.x += this.speed * dt;
    else {
        this.x = -100;
        this.speed= this.speed1();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.y + 70 > allEnemies[i].y) && (this.y < allEnemies[i].y + 70) && (this.x < allEnemies[i].x + 70) && (this.x + 70 > allEnemies[i].x)) {
            this.reset();
            level = 0;
            document.getElementById("score").innerHTML = level;
        }
    }
};
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        if (this.x > 0) {
            this.x -= 100;
        }
    } else if (key == 'right') {
        if (this.x < 400) {
            this.x += 100;
        }
    } else if (key == 'up') {
        if (this.y > 40) {
            this.y -= 90;
        } else {
            this.reset();
            level += 1;
            document.getElementById("score").innerHTML = level;

        }
    } else if (key == 'down') {
        if (this.y < 400) {
            this.y += 90;
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(0, 60),
    new Enemy(0, 130),
    new Enemy(0, 210),
    new Enemy(0, 190)

];
var player = new Player(200, 400);

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