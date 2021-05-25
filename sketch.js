
var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 75, 25);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0);  


  bullet.velocityX = speed;


  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    if(10>(0.5*weight*speed*speed)/(thickness^3)){
      wall.shapeColor = color(0,255,0);
    }
    if(10<(0.5*weight*speed*speed)/(thickness^3)){
      wall.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}