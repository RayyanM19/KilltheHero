class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB = pointB
        this.body = Constraint.create(options);

        World.add(world,this.body);
    }
    display(){
        var pos1 = this.body.bodyA.position;
        var pos2 = this.pointB;

        strokeWeight(0);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        
    }
}