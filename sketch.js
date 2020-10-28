const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground,ball1;
var BOX1,BOX2,BOX3;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  paper1 = new Paper(50,100,50,50);

  BOX1 = createSprite(380,310,20,130);
  BOX2 = createSprite(530,310,20,130);
  BOX1 = createSprite(460,365,140,20);
  //ball = Bodies.rectangle(100,50,50,50);
  //World.add(world,ball);
  //ball1 = Bodies.circle(120,50,20);
  //World.add(world,ball1);

 
  ground = Bodies.rectangle
  (300,height,600,50,{isStatic : true});
  World.add(world,ground);
  fill("red");



}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  //rect(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,600,50);
  paper1.display();
  drawSprites();
}

function keyPressed() {
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})


}
}
