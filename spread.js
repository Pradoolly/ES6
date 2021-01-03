/**
 * ES6 ... 展开式
 * 
 */

// 在数组中的应用
console.log('---...在数组中的应用---');
let array=['a','b','c'];
console.log(...array);


let grade=[1,2,3];
let array2=['a','b','c',...grade];
console.log(...array2)

//在函数参数中的应用
console.log('---...在函数参数中的应用---');

function fun1(a,b,...c) {
    console.log(a,b,c);
	console.log(a,b,...c);
}

fun1('1','2','3','4','5');

//在解构对象中的应用
console.log('---...在解构对象中的应用---');
function fun2(a,b,{name,age}={}){
    console.log(name);
    console.log(age);
}

fun2(1,2,{name:'lili',age:'17'});


















