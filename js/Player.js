class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

addPlayer(){
  if(this.index===1){
    this.positionX=width/2-150
  }else{
    this.positionX=width/2+150
  }
  database.ref("players/player"+this.index).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY
  })
}

  getCount(){
    database.ref("playerCount").on("value",(data)=>{
      playerCount=data.val()
    })
  }
  updateCount(value){
    database.ref("/").update({
      playerCount:value
    })
  }

  getDistance(){
    database.ref("players/player"+this.index).on("value",(data)=>{
      var dist=data.val();
      this.positionX = dist.positionX;
      this.positionY = dist.positionY;
    })
  }
  updateDistance(){
    database.ref("players/player"+this.index).update({
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  
  static getPlayersInfo(){
    database.ref("players").on("value",(data)=>{
      allPlayers=data.val()
    })
  }
}
