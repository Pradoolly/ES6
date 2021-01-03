let name='张三';
let age=12;

function exportFun(){
    console.log('这是导出函数...');
}


export default function fun3(){
    console.log('这是默认导出的函数...');
}

// export {name,age,exportFun as fun};

// export {age as default}