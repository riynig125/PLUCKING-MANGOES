const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango1IMG
var ground
var slingshot
var tree, treeIMG
var stone, stoneIMG
var boy, boyIMG

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(900,450,40);
	mango2 = new Mango(920,400,50);
	mango3 = new Mango(980,300,30);
	mango4 = new Mango(800,470,40);
	mango5 = new Mango(850,550,30);
	mango6 = new Mango(780,410,50);
	mango7 = new Mango(820,300,30);
	tree = new Tree(900,400,100,100);
	ground = new Ground(600,750,1200,20);
	stone = new Stone(100,700,40);
	boy = new Boy(150,700,100,70);
	slingshot = new SlingShot(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);
  fill("red")
  textSize(32);
  text("Press Space To Play Again!!!",400,100)

  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
   mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingshot.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3); 
  detectCollision(stone,mango4);
  detectCollision(stone.mango5);
  detectCollision(stone.mango6);
  detectCollision(stone.mango7);

  drawSprites(); 
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:160, y:500})
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}


