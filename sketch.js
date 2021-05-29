
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world, paper1, ground, dustbin,dustbin1, dustbin2, dustbin3; 
var sling;
var release=0;

function setup() {
    createCanvas(1500, 700);
    rectMode(CENTER);

   

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(600,600,40,40);
    ground = new Ground(800,680,1600,20);
    dustbin1 = new Dustbin(1200,660, 100,20);
    dustbin2 = new Dustbin(1140,620,20,100);
    dustbin3 = new Dustbin(1250,620,20,100)
    
    sling=new Sling(paper1.body,{x:400,y:300});
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("white");
  
 
    
  paper1.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  sling.display();
  
}

function mouseDragged() {
  if(release===0){
       Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased() {

   sling.fly();
   release=0.000004;


}

