class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value",function(data){
      gameState=data.val()
    })
  }
  updateState(value){
    database.ref("/").update({
      gameState:value
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    car1=createSprite(width/2-150,height-100)
    car1.addImage(car1img)
    car1.scale=0.07;
    car2=createSprite(width/2+150,height-100)
    car2.addImage(car2img)
    car2.scale=0.07;
    cars=[car1,car2]
  }
  play(){
    form.hidden()
    Player.getPlayersInfo()
    if(allPlayers!==undefined){
    background("green")
    image(trackimg,0,-height*5,width,height*6)
    var index=0
    for(var i in allPlayers)
    {
      index++;
      cars[index-1].position.x=allPlayers[i].positionX;
      cars[index-1].position.y=(height-allPlayers[i].positionY)
      if(index===player.index)
{
  camera.position.y=cars[index-1].position.y
}
      
    }
    if(keyIsDown(UP_ARROW)){
      player.positionY+=10;
      player.updateDistance()
    }
    drawSprites()
    }
  }
}
