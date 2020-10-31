var ball, spongeImage, sponge;

function preload(){
  spongeImage = loadImage("sponge.png")
}

function setup(){
  database = firebase.database();
  sponge = createSprite(200,200,20,20)
  sponge.addImage(spongeImage);
  sponge.scale = 0.05
  
  database.ref("data").on("value", (data)=>{
    ball = data.val();
    console.log(ball);
  })
  database.ref("x").on("value", (x)=>{
  sponge.x = x.val();
  console.log(sponge.x)
  })
  database.ref("y").on("value", (y)=>{
  sponge.y = y.val();
  console.log(sponge.y)
  })
}
function draw(){
  background("blue");
  drawSprites();
}

function keyPressed(){
  if( keyCode === UP_ARROW){
    sponge.y = sponge.y - 10;
    database.ref("/").update({
      y: sponge.y
    });
  }

  if( keyCode === DOWN_ARROW){
    sponge.y = sponge.y + 10
    database.ref("/").update({
      y: sponge.y
    });
  }

  if( keyCode === RIGHT_ARROW){
    sponge.x = sponge.x + 10
  }

  if( keyCode === LEFT_ARROW){
    sponge.x = sponge.x - 10
  }
}