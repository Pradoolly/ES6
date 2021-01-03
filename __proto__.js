let sutudent={
    getStudentName(){
        return '学生张三';
    }
}


let teacher={
    getTeacherCourse(){
        return '老师教数学';
    }
}

let person ={
    __proto__:sutudent
}

console.log(person.getStudentName())

console.log(Object.getPrototypeOf(person)===sutudent);

person.__proto__ = teacher;






