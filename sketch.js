 var bullet ,wall; 
 var speed,weight,thickness;
 

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(30,52);
  bullet=createSprite(50,200,60,30);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  
}

function draw() {
  background("black");  
  drawSprites();

if(hasCollided(bullet,wall));
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>=10){
    bullet.shapeColor=color(0,255,0);
  }
 
if (damage<10){
  bullet.shapeColor=color(255,0,0);
  }

drawSprites();
}

