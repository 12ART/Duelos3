const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas;
var player1, player2;
var roofObject;
var gunImg, bulletImg;
var gun, bullet, bulletGroup;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
 

 
}

function setup() {
  canvas = createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;
  
  gun = new Gun(160,480,50,20,PI/2)
 
  bulletGroup = createGroup(); 

  roofObject = new roof( 60,590, 2700,20)
  player1 = new Player(1200,500,120,140);
  player2 = new Player(100,500,120,140);

  Engine.run(engine);

 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //player1.distance -= 10

    Matter.Body.applyForce(player1.body, player1.body.position,      
    {x: -40, y: -50});
      //Matter.Body.setVelocity(player1.body, { x: -4, y: -2 });
  }
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(player1.body, player1.body.position,      
     {x: 40, y: -50});
 }
 if (keyCode === 65) {
  //player1.distance -= 10

  Matter.Body.applyForce(player2.body, player2.body.position,      
  {x: -40, y: -50});
    //Matter.Body.setVelocity(player1.body, {  -4, y: -2 });
}
if (keyCode === 68) {

  Matter.Body.applyForce(player2.body, player2.body.position,      
   {x: 40, y: -50});
}
 



}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  gun.display()
  roofObject.display();
  player1.display();
  player2.display();

}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}


