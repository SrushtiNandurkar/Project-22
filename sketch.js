 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 380, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;
	//Create a Ground
	var ground_options = {
		isStatic : true
	}
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options  );
	 World.add(world, ground);
	 var ball_options = {
		restitution : 0.7,
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , ball_options);
	 World.add(world, packageBody);
	 
	 Matter.Body.setStatic(packageBody,true);
}


function draw() {

  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x; 
  packageSprite.y = packageBody.position.y;

  if(keyDown(DOWN_ARROW)){  
	Matter.Body.setStatic(packageBody,false);
  }
  

  drawSprites();
 
}

