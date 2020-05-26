// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

var engine, world;
var tanker,ball1,ball2,shooter;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(300,390,10000,40);
    tanker = new Tanker(300,380,150,30);
    ball1 = new Ball(500,-20,25);
    ball2 = new Ball(750,-30,25);  
    ball3 = new Ball(900,-20,25);
    ball4 = new Ball(600,-30,25);  
    shooter = new Shooter();                                                                                             
}

function draw() {
// Remember to update the Matter Engine and set the background.
   background(255);
   Engine.update(engine);
   ground.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   shooter.display();
   tanker.display();
  // if (keyIsDown("space")){
   // console.log("space");
  // }
  // world.gravity = 10;
}

  //function keyPressed(){
     //  if(keyCode == 32){
      //  Matter.Body.setVelocity(ball2.body,{x: 10, y: -10});   
    //  }
 // }

 function keyPressed() {
  if (keyCode === 37) {
      Matter.Body.setAngle(shooter.body);
         //tanker.setDir(-10, 5);
       //shooter.body.angle = 90;

  } else if (keyCode === 39) {
   // Matter.Body.setAngle(tanker, {x: 10, y: 10});
    //tanker.setDir(10, 5);
  }
}
 

function keyReleased() {
    // Call the shoot method for the cannon.
}