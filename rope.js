class Rope{
    constructor(bodyA,pointB){
     var options = {
        " restitution":5,
        bodyA: bodyA,
        pointB: pointB
     }
     this.rope = Constraint.create(options);
     World.add(world,this.rope)
    }
    display(){
      
       
      
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
       
      }
}