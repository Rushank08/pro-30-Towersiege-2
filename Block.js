class Block{
    constructor(x,y){
        var options={
            'friction':1
        }
        this.x = x;
        this.y = y;
        this. body = Bodies.rectangle(x,y,30,50, options);
        World.add(world, this.body);
        this.visibility=255
    }

    display(){

        if(this.body.speed <6){

            //super.display();
            var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(0.5);
        rect(0,0, 30, 50);
        pop();
            }
            else{
                World.remove(world,this.body)
                push();
                this.visibility=this.visibility-5
                tint(255,this.visibility)
                //image(this.image,this.body.position.x,this.body.position.y,50,50)
                pop();
              }
        
    }
}
