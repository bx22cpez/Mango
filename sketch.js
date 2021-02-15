
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var stone;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,250,30);
	mango3=new mango(900,200,30);
	mango4=new mango(1250,200,30);
	mango5=new mango(1000,80,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(225,400,20,20);

	slingshot = new Slingshot(stone.body,{x:225,y:400});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  stone.display();

  slingshot.display();
 

  groundObject.display();

  detectColision(stone,mango1);
  detectColision(stone,mango2);
  detectColision(stone,mango3);
  detectColision(stone,mango4);
  detectColision(stone,mango5);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
  }

  function mouseReleased() {
 slingshot.fly();
  }

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235, y:420})
    slingshot.attach(stone.body);
  }
}

function detectColision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+stone.r){
      Matter.Body.setStatic(lmango.body,false);
    }
}