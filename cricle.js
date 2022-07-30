class Cricle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
      }
      
      getArea(){
        return (Math.pi*Math.pow(this.radius,2))
        }
        getcircumfrence(){
          return 2*Math.pi*this.radiuc
          }
     set radius2(modiradius){
       this.radius=modiradius
       }
        set color2(modicolor){
       this.color=modicolor
       }
    }
    var c=new Cricle("1.0","red")
    c.radius2="void"
    c.color2="void"
    console.log(c.radius)
    console.log(c.color)
    console.log(c.getArea);