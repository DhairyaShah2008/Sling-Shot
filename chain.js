class chain{
    constructor(A,B) {
        var options = {
   bodyA:A,
   bodyB:B,
   stiffness:2,
   length:1
        }
this.chain=Constraint.create(options)
World.add(world,this.chain)
      }
      display(){
          var APos=this.chain.bodyA.position
          var BPos=this.chain.bodyB.position
          
line(APos.x,APos.y,BPos.x,BPos.y)
      }
}