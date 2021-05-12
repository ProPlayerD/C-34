const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg

function preload(){
 backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,490,1000,30);
  
  //row 1
  box1 = new Box(430,100,60,60);
  box2 = new Box(430,100,60,60);
  box3 = new Box(430,100,60,60);
  box4 = new Box(430,100,60,60);
  box5 = new Box(430,100,60,60);
  box6 = new Box(430,100,60,60);
  box7 = new Box(430,100,60,60);

  //row 2
  box8  = new Box(495,100,60,60);
  box9  = new Box(495,100,60,60);
  box10 = new Box(495,100,60,60);
  box11 = new Box(495,100,60,60);
  box12 = new Box(495,100,60,60);
  box13 = new Box(495,100,60,60);

  //row 3
  box14  = new Box(560,100,60,60);
  box15  = new Box(560,100,60,60);
  box16  = new Box(560,100,60,60);
  box17  = new Box(560,100,60,60);
  box18  = new Box(560,100,60,60);
  box19  = new Box(560,100,60,60);

  ball = new Ball(60,100,200,80);

  rope = new Rope(ball.body,{x:150,y:100});

  monster = new Monster(700,400,200,200);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  
  ball.display();

  rope.display();

  monster.display()
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
