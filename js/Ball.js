class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
    //this.image = loadImage("assets/Bubble.png");
    //console.log(Ball);
  }

  display() {
    var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("blue");
     ellipseMode(RADIUS);
     ellipse(0, 0, this.radius);
     // imageMode(CENTER);
     // image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
      pop();
   // console.log(ball.display);
  }
}
