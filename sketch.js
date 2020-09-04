
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(401,650);
	bob2 = new Bob(441,650);
  bob3 = new Bob(480,650);
  bob4 = new Bob(361,650);
	bob5 = new Bob(321,650);
	
	roof1 = new Roof(400,450,230,20);

  rope1 = new Rope(bob1.body, roof1.body);
  rope2 = new Rope(bob2.body, roof1.body);
  rope3 = new Rope(bob3.body, roof1.body);
  rope4 = new Rope(bob4.body, roof1.body);
  rope5 = new Rope(bob5.body, roof1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display(); 
  rope2.display(); 
  rope3.display();  
  rope4.display(); 
  rope5.display(); 
}



