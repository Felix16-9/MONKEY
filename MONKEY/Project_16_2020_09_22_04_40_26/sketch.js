var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  
  monkey=createSprite(50,180,20,50)
  monkey.addAnimation("running",monkey_running);
  
  monkey.scale=0.1;
  
  ground=createSprite(200,190,400,20);
  ground.velocityX=-4
  ground.x=ground.width/2
  
  GameOver=createSprite(300,100);
  
  GameOver.scale=0.5
  
  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visible=false;
  
  FoodGroup=createGroup();
  obstaclesGroup=createGroup();
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height)
  monkey.debug=true
  
  
  score=0;
  
  
  
  
}


function draw() {
  background(180);
text("Score:"+score,500,50);
 
  if(gameState===PLAY){
    
   GameOver.visible=false; 
    
        if (keyDown("space")){
            monkey.velocityY=-12;
            }
                         
   
 

   monkey.velocityY=monkey.velocityY+0.9
     
    spawnbanana();
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(monkey)){
      gameState=END;
    }
  

else if (gameState===END){
  GameOver.visible=true
  
}
ground.velocityX=0;
  monkey.velocityY=0
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);

monkey.collide(invisibleGround);
drawSprites();
}
}
function spawnObstacles(){
  if(frameCount%60===0){
    var obstacle=createSprite(600,165,10,40)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-5
    

  obstacle.scale=0.1;
  
  
} 
}



function spawnbanana(){
 if (frameCount%65===0){
   var banana=createSprite(300,140,10,40)
   banana.addImage(bananaImage)
   banana.scale=0.1;
   
   
   
  
   }
  
  
}
