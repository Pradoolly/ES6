class Person{
    constructor(data){
        this.data=data;
        this.num=[];
    }

    get sortNum(){
        return this.num;
    }

    set sortNum(data){
        this.num.push(data);
    }

    read(){
        console.log(this.data);
    }


    static run(){
        console.log("开始跑了");
    }
}


let person1=new Person('哈哈');
person1.read();

person1.sortNum=1;
person1.sortNum=2

console.log(person1.sortNum);


Person.run();




