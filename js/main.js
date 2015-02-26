var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 512, 48);
    game.load.image('background','assets/background.png');

}

var button;
var background;

function create() {
    
    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    var text = "It's nice to meet you Mr. Johnson.\nTake a seat, and we can get started.";
    var style = { font: "44px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
    
    button = game.add.button(game.world.centerX - 32, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

