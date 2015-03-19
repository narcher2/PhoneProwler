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
    //textbox1 = game.add.tileSprite(170, 76, 835, 392, 'textboxblack');

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
if (scroll > 0)
{
    scroll--;
}
    updateTexts();
}

function actionOnDown (){
if (scroll < 5)
{
    scroll++;
}
    updateTexts();
}

function updateTexts(){
    if (page === 1)
    {
        if (scroll === 0)
        {
      buttonText1.setText("Ey yo wassup Kenny");
      buttonText2.setText("Not much mang, just chillin', watchu up to?");
      buttonText3.setText("Not much, bout to kill this bitch.");
      buttonText4.setText("WHAT");
        }
        if (scroll === 1)
        {
      buttonText1.setText("[Picture of a pizza]");
      buttonText2.setText("All by yoself?");
      buttonText3.setText("AWWWW YEAHHHHH");
      buttonText4.setText("Selfish. Lemme have some homie.");
        }
        if (scroll === 2)
        {
      buttonText1.setText("Nah man, not after what hapened last time.");
      buttonText2.setText("You know how I feel about onions on your half getting on my half.");
      buttonText3.setText("Disrespectful smh.");
      buttonText4.setText("C'mon homie, we've been friends since like the 8th grade.");
        }
        if (scroll === 3)
        {
      buttonText1.setText("YOU JUST GRADUATED 8TH GRADE");
      buttonText2.setText("So don't I deserve a reward?");
      buttonText3.setText("True money. We need to celebrate. Get yo ass over here.");
      buttonText4.setText("Nah I'm not hungry.");
        }
    }
    if (page === 2)
    {
        if (scroll === 0)
        {
      buttonText1.setText(" ");
      buttonText2.setText("ey, its Tyrone.");
      buttonText3.setText("Eyy, what you been up to man?");
      buttonText4.setText("u know, gettin money; gettin that street cred");
        }
        if (scroll === 1)
        {
      buttonText1.setText("True, what kind of bread you cookin'?");
      buttonText2.setText("I decided to diversify my bonds and put a cool ten thou in my IRA.");
      buttonText3.setText("True, how them girls lookin'?");
      buttonText4.setText("Rowena and I are 10 years strong, we gettin' a third kid in July. Ima name him Chuck.");
        }
        if (scroll === 2)
        {
      buttonText1.setText("Shit mang, I'm honored.");
      buttonText2.setText("You should be. He's named after his father.");
      buttonText3.setText("...");
      buttonText4.setText("Got the test back today. You just had to slam my wife, didn't you chuck?");
        }
        if (scroll === 3)
        {
      buttonText1.setText("SMH I'm out of here, peace.");
      buttonText2.setText("YOU CANT RUN FROM ME HOMIE IM GONNA GETCHU");
      buttonText3.setText("CATCH ME IF YOU CAN BOI. EVEN IF YOU KILL ME YO WIFE WAS WORTH IT");
      buttonText4.setText("*chuck-chuck*");
        }
    }
}

function actionOnHidden1 (){
    if (page === 0)
    {
    page = 1;
    updateTexts();
    }
}
function actionOnHidden2 (){
    if (page === 0)
    {
    page = 2;
    }
}
function actionOnHidden3 (){
    if (page === 0)
    {
    page = 3;
    }
}
function actionOnHidden4 (){
    if (page === 0)
    {
    page = 4;
    }
}

function actionOnClick () {
    
    page = 0;
    
      buttonText1.setText("Kenny");
      buttonText2.setText("Tyreece");
      buttonText3.setText("The bae");
      buttonText4.setText("Mom");

    
}
