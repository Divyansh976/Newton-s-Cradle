class Bob  {
    constructor(x,y,radius)  {
        var options ={
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density: 1.2
        }
        
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        

        World.add(world,this.body);
    }

    display()  {
        var paperpos=this.body.position;
         push()
        translate(paperpos.x, paperpos.y);
         ellipseMode (CENTER);
         fill(247,2,248)
         ellipse(0,0,this.radius,this.radius);
          pop()

    }

}