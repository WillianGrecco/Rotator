
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 50;
var angle2 = 100;
var angle3 = 150;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	
	//Crie os Corpos aqui.
	var ground_options = {
		isStatic: true,
	  };

	  var rotator_options = {
		isStatic: true,
	  };

	  var particles_options = {
		restitution: 0.95,
		frictionAir: 0.1,
	  };

	plane = Bodies.rectangle(100, 400, 650, 20, ground_options);
	World.add(world, plane);



	block1 = Bodies.rectangle(100, 300, 100, 20, ground_options);
    World.add(world, block1);

	block2 = Bodies.rectangle(290, 300, 100, 20, ground_options);
    World.add(world, block2);



	rotator1 = Bodies.rectangle(200, 200, 150, 20, rotator_options);
    World.add(world, rotator1);
	
	rotator2 = Bodies.rectangle(200, 200, 150, 20, rotator_options);
    World.add(world, rotator2);
	
	rotator3 = Bodies.rectangle(200, 200, 150, 20, rotator_options);
    World.add(world, rotator3);



    particle1 = Bodies.circle(220, 50, 10, particles_options);
    World.add(world, particle1);

	particle2 = Bodies.circle(220, 50, 13, particles_options);
    World.add(world, particle2);

	particle3 = Bodies.circle(220, 50, 14, particles_options);
    World.add(world, particle3);

	particle4 = Bodies.circle(220, 50, 16, particles_options);
    World.add(world, particle4);

	particle5 = Bodies.circle(220, 50, 18, particles_options);
    World.add(world, particle5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);


  Matter.Body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();

  angle1 += -1;

  Matter.Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();

  angle2 += 1;

  Matter.Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();

  angle3 += -1;
  
  ellipse(particle1.position.x, particle1.position.y, 20);
  ellipse(particle2.position.x, particle2.position.y, 20);
  ellipse(particle3.position.x, particle3.position.y, 20);
  ellipse(particle4.position.x, particle4.position.y, 20);
  ellipse(particle5.position.x, particle5.position.y, 20);
  
  rect(block1.position.x,block1.position.y,100,20);
  rect(block2.position.x,block2.position.y,100,20);

  rect(plane.position.x, plane.position.y, 650, 20);
  drawSprites();
 
}



