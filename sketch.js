var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var car1, car2, car3, car4;
var cars;
var database;
var allplayers;
var form, player, game;


function setup(){
  canvas = createCanvas(windowWidth  ,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
   game.update(1);
   gameState = 1;
  }
  if(gameState == 1){
   game.play();
  }
}
