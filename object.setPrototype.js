/**
 * 
 * 设置对象的prototype
 * 
 */
let student = {
    getName(){
        return '张进';
    }
}

let teacher ={
    getCourse(){
        return '数学'; 
    }
}


let sunday = Object.create(student);
console.log(sunday.getName());

console.log(Object.getPrototypeOf(sunday)===student);

Object.setPrototypeOf(sunday,teacher);
console.log(sunday.getCourse());

console.log(Object.getPrototypeOf(sunday)===teacher);
