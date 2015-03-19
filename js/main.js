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


}

var button;
var background;
var step;
var music;

function create() {
    
    music = game.add.audio('chopin');

    music.play();
    
    step = 0;
    page = 0;
    scroll = 0;

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1200, 600, 'background');
    phone = game.add.sprite(0, 0, 'phone');
    
        hiddenbutton1 = game.add.button(170, 76, 'textboxblack', actionOnHidden1, this, 0, 0, 0);
    
        hiddenbutton2 = game.add.button(170, 174, 'textboxblack', actionOnHidden2, this, 0, 0, 0);
    
        hiddenbutton3 = game.add.button(170, 272, 'textboxblack', actionOnHidden3, this, 0, 0, 0);
    
        hiddenbutton4 = game.add.button(170, 370, 'textboxblack', actionOnHidden4, this, 0, 0, 0);
    //player = game.add.sprite(400, 500, 'ship');
    //phone = game.add.sprite( game.world.centerX, game.world.centerY, 'phone', assets/buttons/phonebackground.png');
    
    //textbox1 = game.add.button(170, 76, 'textboxblack', actionOnClick, this, 2, 1, 0);
    textbox1 = game.add.tileSprite(170, 76, 835, 392, 'textboxblack');

    button = game.add.button(170, 468, 'messages', actionOnClick, this, 0, 0, 1);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    button2 = game.add.button(298, 468, 'scrolldown', actionOnUp, this, 0, 0, 1);

    button2.onInputOver.add(over, this);
    button2.onInputOut.add(out, this);
    button2.onInputUp.add(up, this);
    
    button3 = game.add.button(362, 468, 'scrollup', actionOnClick, this, 0, 0, 1);
    
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

function actionOnClick () {
    
    step++;
    //page++;
    
    if (step === 1)
    {
      buttonText1.setText("Kenny");
      buttonText2.setText("Tyreece");
      buttonText3.setText("The bae");
      buttonText4.setText("Mom");
    }

    if (step === 2)
    {
      text.setText("If you were a fruit or vegetable,\nwhat would you be, and why?");   
      buttonText1.setText("A pineapple.");
      buttonText2.setText("A cactus, because I'm tough on the outside,\nbut resourceful on the inside");
      buttonText3.setText("Celery, because I burn more energy than I create.");
      buttonText4.setText("A cat, meow.");
    }
    if (step === 2)
    {
      text.setText("Why do you have interest in this company?");   
    buttonText1.setText("Ever since I was a little boy I've dreamed of working at this company.");
      buttonText2.setText("My mom told me to apply because she wants me out of the house.");
      buttonText3.setText("I heard you don't drug test.");
      buttonText4.setText("This is the one company I can work for and\n honestly feel like I'm making the world better.");
    }
    if (step === 3)
    {
      text.setText("What on your resume would you say makes\nyou most qualified for this job?");  
      buttonText1.setText("My IQ of 160 makes me very intelligent and overqualified for this job.");
      buttonText2.setText("My leadership skills in college can \neasily transition towards synergy in the workplace.");
      buttonText3.setText("My synergetic attitude makes me right for this job.");
      buttonText4.setText("My entire resume is just the word 'synergy' repeated over and over again.");
    }
    if (step === 4)
    {
      text.setText("What is your biggest weakness?");   
        buttonText1.setText("My inability to work with others.");
      buttonText2.setText("I work too hard for my own good.");
      buttonText3.setText("My height.");
      buttonText4.setText("I'm really lazy and often don't get\n things turned in on time.")
    }
    if (step === 5)
    {
      text.setText("Where do you see yourself in 5 years?");
    buttonText1.setText("Sitting in your chair, asking\nsome young go-getter the same question.");
      buttonText2.setText("At the head of this company.");
      buttonText3.setText("I'll probably move on to bigger and better things,\n at a different company.");
      buttonText4.setText("I'll probably have a kid and\nbecome a stay at home dad.");
    }
    if (step === 6)
    {
      text.setText("Kirk or Picard?");   
    buttonText1.setText("Kirk.");
      buttonText2.setText("Picard.");
      buttonText3.setText("Reynolds.");
      buttonText4.setText("What?");
    }
    if (step === 7)
    {
      text.setText("Alrighty, I think I've heard enough. We'll call you." + step);   
    buttonText1.setText("Thank you, I hope you reached your expectations.");
      buttonText2.setText("I'll be anxiously awating your call.");
      buttonText3.setText("You know, even if I didn't get the job\n you can still call me and let me know\n like it's no big deal.");
      buttonText4.setText("*Shake hand firmly* Thank you sir, I look forward to working with you.");
    }
}
