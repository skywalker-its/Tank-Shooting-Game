class Shooter{
  constructor(){
      var Options = {
          isStatic : true,

      }
     this.body = Bodies.rectangle(150,320,150,30,Options);
    World.add(world,this.body);
    angleMode(DEGREES);
    this.body.angle = 180;
    }

   display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y); 
    angleMode(DEGREES);
    rotate(angle);       
    rectMode(CENTER);
    stroke("blue");
    strokeWeight(4);
    fill("Red");
    rect(0,0,150,30);
    pop();
   }




};