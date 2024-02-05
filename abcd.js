class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`HI MY NAME IS ${this.name}`);
    }
};
class Child extends Parent{
    constructor(name,age, cla){
        super(name,age);
        this.cla = cla;
    }
};
let c1 = new Child("rohan",18,89);
console.log(c1.age);
console.log(c1.cla);
c1.talk()