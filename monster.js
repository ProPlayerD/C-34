class Monster{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':2.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Monster-01.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}