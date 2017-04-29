var alto=document.documentElement.clientHeight;
var ancho=document.documentElement.clientWidth;
var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update:update });
var fruta={x:0, y:0, tipo:'', img:''};
function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.stage.backgroundColor='#000000';
    game.load.image('cesta', 'assets/basket.png');
    game.load.image('manzana', 'assets/manzana.png');

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var cesta = game.add.sprite(((ancho-150)/2),(alto-110), 'cesta');
    var apple = game.add.sprite(((ancho-50)/2),10, 'manzana');

	game.physics.enable(cesta, Phaser.Physics.ARCADE);
	game.physics.enable(apple, Phaser.Physics.ARCADE);
    cesta.body.velocity.x=0;
    apple.body.velocity.y=150;
    

}

function update(){

}
