class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100, 300);
    car2 = createSprite(300, 300);
    car3 = createSprite(500, 300);
    car4 = createSprite(700, 300);
    cars = [car1, car2, car3, car4]
  }

  play(){
    player.getPlayerInfo();
    form.hide();
    background("white");
    if(allplayers !== undefined){
      var yPosition = 130;
      var index = 0;
      var x =200;
      var y;
      for(var plr in allplayers){
        index= index+1;
        x = x+ 200;
        y = displayHeight - allplayers[plr].distance

        cars[index -1].x = x;
        cars[index -1].y = y;

        if(index== player.index){
          cars[index -1].shapeColor = "red";
          camera.position.y =y;
        };

        if( plr == "player" + player.index){
          fill("red");
          car1.shapeColor = "red";
          console.log(cars[index-1]);
        }
        else{
          fill("black");
        }
        yPosition += 20;
        textSize(15);
        text(allplayers[plr].name + " : " + allplayers[plr].distance, 50,yPosition);
      }
      if(keyDown(UP_ARROW)){
        player.distance += 50;
        player.update();
      }
    }
    drawSprites();
  }
}

