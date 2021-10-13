class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png");
    this.greeting = createElement("h2");
  }
  hidden(){
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()
    this.titleImg.hide()
  }
  display(){
    this.input.position(width/2-100,height/2-100)
    this.input.style("background-color","transparent")
    this.playButton.position(width/2-50,height/2-20)
    this.titleImg.position(width/2-200,50)
    this.greeting.position(width/2-100,height/2-100)
    this.titleImg.size(400,150)
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide()
      this.greeting.html("Hello " + this.input.value())
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance()
      
    })
  }
 
}
