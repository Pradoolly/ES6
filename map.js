let data = new Map();
let name={},fun=function(){},age=13;

data.set(name,'张三');
data.set(fun,'fun...');
data.set(age,22);

console.log(data.size);
console.log(data.get(age));

data.delete(age);

data.has(age);

data.forEach((value,key)=>{
    console.log(`${value}=${key}`);
})

console.log(data);