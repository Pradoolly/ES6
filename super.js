let student ={
    getStudentName(){
        return '学生名称';
    }
}

let person ={
    __proto__:sutudent,
    getName(){
        return super.getStudentName()+'super'
    }
}


console.log(person.getName());