var spiderman,standingImage,actiontakingImage,ground,jumpImage;
function preload(){
standingImage=loadAnimation("images/standing.png");
 actiontakingImage=loadAnimation("images/action taking.png","images/Running.png","images/running 2.png");
  jumpImage = loadAnimation("images/jump.png");
}
function setup() {
  createCanvas(800,500);
spiderman=createSprite(31,380,10,10);
ground = createSprite(500,460,1000,10)
edges = createEdgeSprites();
  spiderman.addAnimation('standingImage',standingImage)
  spiderman.addAnimation('actiontaking',actiontakingImage)
  spiderman.addAnimation('jump',jumpImage)
  spiderman.scale = 0.2
}

function draw() {
  background("red");
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(keyDown("Right")){
    spiderman.changeAnimation("actiontaking");

    spiderman.mirrorX(1);
    spiderman.x = spiderman.x+1;
  }
  else if(keyWentUp("Right")){
    spiderman.changeAnimation("standingImage");
  }
  spiderman.velocityY = 10;
  spiderman.collide(ground);
  spiderman.collide(edges);
  if(keyDown("left")){
    spiderman.mirrorX(-1);
    spiderman.changeAnimation("actiontaking");
    spiderman.x = spiderman.x-1;
  }
  else if(keyWentUp("left")){
    spiderman.changeAnimation("standingImage");
  }
  if (keyWentDown("Space")){
    spiderman.changeAnimation("jump");
    spiderman.velocityY=-50
  }
  else if (keyWentUp("Space")){
    spiderman.changeAnimation("standingImage") 
   }
  
  drawSprites()
}