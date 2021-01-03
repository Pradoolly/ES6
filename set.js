let data = new Set();
data.add('a');
data.add('b');
data.add('c');

console.log(data);
console.log(data.size);
console.log(data.has('a'));

data.delete('a');
console.log(data);

data.forEach(data=>{
    console.log(data);
})

data.clear()
console.log(data);

