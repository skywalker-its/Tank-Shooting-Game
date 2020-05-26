class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        
    }

    attach(body){
        this.sling.bodyA = body;
    }

    shoot(){
        this.sling.bodyA = null;

    }

    display(){
        
    }

}
