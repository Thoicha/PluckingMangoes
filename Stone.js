class Stone{
    constructor(x,y){
        var options={
            'friction': 1,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}