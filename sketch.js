var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //alogrithm for detecting collisions
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //alogrithm for bouncing 2 objects
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
  fixedRect.velocityX = -1*fixedRect.velocityX;
  movingRect.velocityX = -1*movingRect.velocityX; 
 }
 if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.velocityY = -1*fixedRect.velocityY;
    movingRect.velocityY = -1*movingRect.velocityY; }

  drawSprites();
}