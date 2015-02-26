var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create });

function create() {

    var text = "It's nice to meet you Mr. Player. Take a seat, and we can get started.";
    var style = { font: "44px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);

}
