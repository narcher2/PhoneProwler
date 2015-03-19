var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 512, 48);
    game.load.spritesheet('messages', 'assets/buttons/textbutton.png', 64, 64);
    game.load.spritesheet('scrolldown', 'assets/buttons/downbutton.png', 64, 64);
    game.load.spritesheet('scrollup', 'assets/buttons/upbutton.png', 64, 64);
    game.load.image('phone','assets/buttons/phonebackground.png');
    game.load.audio('chopin', 'assets/Prelude15.mp3');
    game.load.image('background','assets/background.png');
    game.load.image('textboxblack','assets/buttons/textboxwhite.png');
    game.load.spritesheet('hidden','assets/buttons/hiddenlol.png', 835, 98);


}

var button;
var background;
var step;
var music;
var page;
var scroll;

function create() {
    
    music = game.add.audio('chopin');

    music.play();
    
    step = 0;
    page = 0;
    scroll = 0;

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1200, 600, 'background');
    phone = game.add.sprite(0, 0, 'phone');
        
        hiddenbutton1 = game.add.button(170, 76, 'hidden', actionOnHidden1, this, 0, 0, 1);
        
        hiddenbutton1.onInputOver.add(over, this);
        hiddenbutton1.onInputOut.add(out, this);
        hiddenbutton1.onInputUp.add(up, this);
    
        hiddenbutton2 = game.add.button(170, 174, 'hidden', actionOnHidden2, this, 0, 0, 1);
        
        hiddenbutton2.onInputOver.add(over, this);
        hiddenbutton2.onInputOut.add(out, this);
        hiddenbutton2.onInputUp.add(up, this);
    
        hiddenbutton3 = game.add.button(170, 272, 'hidden', actionOnHidden3, this, 0, 0, 1);
        
        hiddenbutton3.onInputOver.add(over, this);
        hiddenbutton3.onInputOut.add(out, this);
        hiddenbutton3.onInputUp.add(up, this);
    
        hiddenbutton4 = game.add.button(170, 370, 'hidden', actionOnHidden4, this, 0, 0, 1);
        
        hiddenbutton4.onInputOver.add(over, this);
        hiddenbutton4.onInputOut.add(out, this);
        hiddenbutton4.onInputUp.add(up, this);
    //player = game.add.sprite(400, 500, 'ship');
    //phone = game.add.sprite( game.world.centerX, game.world.centerY, 'phone', assets/buttons/phonebackground.png');
    
    //textbox1 = game.add.button(170, 76, 'textboxblack', actionOnClick, this, 2, 1, 0);
    textbox1 = game.add.tileSprite(170, 76, 835, 392, 'textboxblack');

    button = game.add.button(170, 468, 'messages', actionOnClick, this, 0, 0, 1);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    button2 = game.add.button(298, 468, 'scrolldown', actionOnDown, this, 0, 0, 1);

    button2.onInputOver.add(over, this);
    button2.onInputOut.add(out, this);
    button2.onInputUp.add(up, this);
    
    button3 = game.add.button(362, 468, 'scrollup', actionOnUp, this, 0, 0, 1);
    
    button3.onInputOver.add(over, this);
    button3.onInputOut.add(out, this);
    button3.onInputUp.add(up, this);
    
    /*button4 = game.add.button(32, 540, 'button', actionOnClick, this, 2, 1, 0);

    button4.onInputOver.add(over, this);
    button4.onInputOut.add(out, this);
    button4.onInputUp.add(up, this);*/
    
   /*     text = game.add.text(game.world.centerX, game.world.centerY,"Take a seat Mr. Player.\nLet's get started.", {
        font: "40px Arial",
        fill: "#ff0044",
        align: "center"
    });*/

    //text.anchor.setTo(0.5, 0.5);
    
    /*var text = "Take a seat Mr. Player.\nLet's get started.";
    var style = { font: "40px Arial", fill: "#ff0044", align: "center" };
    var t = game.add.text(game.world.centerX-300, 0, text, style);
    */
    
    buttonText1 = game.add.text(186, 76,"Kenny", {
        font: "25px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText2 = game.add.text(186, 174,"Tyrone", {
        font: "25px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText3 = game.add.text(186, 272,"The Bae", {
        font: "25px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText4 = game.add.text(186, 370,"Mom", {
        font: "25px Arial",
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
    //page++;
    //text.setText("- You have clicked -\n" + step + " times !");

}

function actionOnUp (){
    scroll++;
}

function actionOnDown (){
    scroll--;
}

function actionOnHidden1 (){
    page = 1;
}
function actionOnHidden2 (){
    page = 2;
}
function actionOnHidden3 (){
    page = 3;
}
function actionOnHidden4 (){
    page = 4;
}

function actionOnClick () {
    
    page = 0;
    
      buttonText1.setText("Kenny");
      buttonText2.setText("Tyreece");
      buttonText3.setText("The bae");
      buttonText4.setText("Mom");

    
}
