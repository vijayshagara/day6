
class Person{
 constructor(fname,lname,age){
    this.name1=fname
    this.name2=lname
    this.age=age

 }

  
   getFname()
  {
    return this.name1;
  }

  
   getLname()
  {
    return this.name2
  }

  
   getAge()
  {
    return this.age;
  }


}
var p =new Person("vijay","vj","age")
console.log(p.getFname);
console.log(p.getLname)
console.log(p.getage)