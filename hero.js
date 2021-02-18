class Hero{
    constructor(x,y,r){
        var options={
            frictionAir:0.8,
            density:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image = loadImage("images/Superhero-01.png");
    
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
       

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r+130,this.r);
        pop();
       
    }
}