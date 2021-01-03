class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        return `${this.name},${this.age}`
    }
}

class Student extends Person{
    constructor(name,age){
        super(name,age)
    }
}

let zhangsan=new Student("zhangsan",22);
console.log(zhangsan.introduce())