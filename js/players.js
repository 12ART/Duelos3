class Player {
  constructor(x, y, width, height) 
  {
          var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
          }
    this.width = width;
    this.height = height;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("assets/cowboy.png")

    World.add(world, this.body);
  }


  display() {
 
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
 
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    pop();
  }
}

