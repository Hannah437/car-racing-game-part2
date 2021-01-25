class Form {
  constructor() {
    this.title = createElement('h2');
   this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(windowWidth/2, 0);
    
    this.input.position(windowWidth/2, 160);
    this.button.position(windowWidth/2, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(windowWidth/2, 160)
    });

  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}


