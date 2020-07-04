var paper, bucket1, bucket2, bucket3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperIMG = loadImage("crumpled paper.jpg");
}

function setup() {
	createCanvas(800, 700);
	background(0);

	engine = Engine.create();
	world = engine.world;

	paper = createSprite(30,650,15,15);

	bucket1 = createSprite(680,625,15,105);
	bucket2 = createSprite(730,670,105,15);
	bucket3 = createSprite(780,625,15,105);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown(RIGHT_ARROW)){
	paper.velocityX = 2;
	paper.velocityY = 0;
  }

  jump(); 

  drawSprites();
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  paper.display();
}

function jump(){
	if(keyDown(SPACE)){
		paper.velocityX = 0;
		paper.velocityY = 2;
	}
}

