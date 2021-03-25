var A;
var B;

function setup() {
  createCanvas(800,400);
  A=createSprite(100,200,70,20);
  
  B=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  B.x=World.mouseX;
  B.y=World.mouseY;

  if(B.x-A.x<B.width/2+A.width/2 && A.x-B.x<B.width/2+A.width/2 && A.y-B.y<B.height/2+A.height/2 && B.y-A.y<B.height/2+A.height/2){
  A.shapeColor="yellow";
  B.shapeColor="yellow";
  }
  else {
    A.shapeColor="grey";
    B.shapeColor="grey";
  }
  drawSprites();
}