var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 512, 48);
    game.load.image('background','assets/background.png');

}

var button;
var background;
var step;

function create() {
    
    step = 0;

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    button = game.add.button(32, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    button2 = game.add.button(32, 448, 'button', actionOnClick, this, 2, 1, 0);

    button2.onInputOver.add(over, this);
    button2.onInputOut.add(out, this);
    button2.onInputUp.add(up, this);
    
    button3 = game.add.button(32, 496, 'button', actionOnClick, this, 2, 1, 0);

    button3.onInputOver.add(over, this);
    button3.onInputOut.add(out, this);
    button3.onInputUp.add(up, this);
    
    button4 = game.add.button(32, 540, 'button', actionOnClick, this, 2, 1, 0);

    button4.onInputOver.add(over, this);
    button4.onInputOut.add(out, this);
    button4.onInputUp.add(up, this);
    
        text = game.add.text(game.world.centerX, game.world.centerY,"Take a seat Mr. Player.\nLet's get started.", {
        font: "40px Arial",
        fill: "#ff0044",
        align: "center"
    });

    text.anchor.setTo(0.5, 0.5);
    
    /*var text = "Take a seat Mr. Player.\nLet's get started.";
    var style = { font: "40px Arial", fill: "#ff0044", align: "center" };
    var t = game.add.text(game.world.centerX-300, 0, text, style);
    */
    
    buttonText1 = game.add.text(60, 400,"Take a seat", {
        font: "20px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText2 = game.add.text(60, 448,"Take a seat", {
        font: "20px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText3 = game.add.text(60, 496,"Take a seat", {
        font: "20px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText4 = game.add.text(60, 544,"Take a seat", {
        font: "20px Arial",
        fill: "#000000",
        align: "left"
    });
    
    //var buttonText1 = "Take a seat";
    //var buttonStyle = {font: "20px Arial", fill: "#000000", align: "left" };
    
    //var bt1 = game.add.text(60, 400, buttonText1, buttonStyle)
    


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

function update() {

    game.input.onDown.addOnce(updateText, this);

}

function updateText() {

    step++;
    text.setText("- You have clicked -\n" + step + " times !");

}

function actionOnClick () {
    
    step++;

    if (step === 1)
    {
      text.setText("If you were a fruit or vegetable, what would you be, and why?");   
    }
    if (step === 2)
    {
      text.setText("Why do you have interest in this company?");   
    }
    if (step === 3)
    {
      text.setText("What on your resume would you say makes you most qualified for this job?");   
    }
    if (step === 4)
    {
      text.setText("What is your biggest weakness?");   
    }
    if (step === 5)
    {
      text.setText("Where do you see yourself in 5 years?");   
    }
    if (step === 6)
    {
      text.setText("Kirk or Picard?" + step);   
    }
}
