
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob=new Bob(200,200,5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  co
  drawSprites();
 bob.display()
}



