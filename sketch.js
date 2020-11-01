
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage;
var treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var sling;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(950,270);
	mango2 = new Mango(830,270);
	mango3 = new Mango(730,260);
	mango4 = new Mango(1070,230);
	mango5 = new Mango(970,200);
	mango6 = new Mango(890,170);
	mango7 = new Mango(810,200);
	
	stone = new Stone(140,460);

	sling = new Slingshot(stone.body,{x: 130,y: 460});

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
 
  image(boyImage,100,400,200,250);
  image(treeImage,600,100,600,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x: 130, y: 460});
		sling.attached(stone.body);
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

		

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.body.circleRadius+lstone.body.circleRadius)
	{
		Body.setStatic(lmango.body,false);
	}
}

