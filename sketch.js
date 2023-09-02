const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var left;
var right;
var top_wall;
var bt_1,bt_2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options={
    restitution:0.7
  }
  ball=Bodies.circle(200,20,20,ball_options);
  World.add(world,ball);

  bt_1=createImg("up.png");
  bt_1.size(50,50);
  bt_1.position(20,30);
  bt_1.mouseClicked(v_force)
  bt_2=createImg("right.png");
  bt_2.size(50,50);
  bt_2.position(200,30);
  bt_2.mouseClicked(h_force);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function h_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}
function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
}

