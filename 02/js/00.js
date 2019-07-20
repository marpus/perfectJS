// 00. 客户端JS和ECMA基础
console.log(document.title);

// 语句和表达式
/*
var a = 12;
var b = 12
;
console.log(a);
console.log(b);
console.log(a === b);
console.log(b + 2);
console.log(2);

var c = 16;
var d = (12, 18);
console.log(c);
console.log(d);
console.log(c + d);

console.log(eval({}));
function() {}
(function(){})
*/

// 运算符
/*
var num = 15;
console.log(num + 2);
console.log(num);
num += 2; // num = num + 2; num + 2;
console.log(num);
var obj = {  // obj -> a => 'a' 
    a: 'a', 
    b: 'b',
    c: 'z'
};
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

var num2 = 15;
num2 = num2 !== 15 ? num2 + 2 : num2 - 2;
console.log(num2);
*/ 

// 标识符，关键字和变量
/*
var title = 'abc';
var Title = 'def';
var TITLE = 'XYZ';
console.log(title === Title);
console.log(title === TITLE);
console.log(Title === TITLE);
console.log(title);
console.log(Title);
console.log(TITLE);

// var 123;
// var x398;
// var __abc;
// var $abc$;
var 中文 = 'ahc';
var msg = '中文';
console.log(中文);
console.log(msg);

// var break;
// var msg2 = 'abc';
// msg2 = '英语';
// msg2 = 123
// console.log(msg2);
*/

// 块
/*
var name = 'xiaoming';
console.log(name);
console.log(name2);
{
    var name2 = 'xiaoming_yuangong';
}
console.log(name);
console.log(name2);
*/

// with语句
/*
var box = {
    name: 'box1',
    shape: 'rect',
    open: function() {
        console.log('盒子已经打开了。');
    },
    close: function() {
        console.log('盒子已经关闭了。');
    }
};

console.log(box.name); // box -> name <=> box1

with(box) { // [box.]name
    console.log(name);
    console.log(shape);
    open();
    close();
}
// 全局泄漏
var obj = {
    a: 3
};
var obj2 = {
    b: 4
};
function foo(ob) {
    with(ob) {
        a = 2; // [ob.]a
    }
}
foo(obj);
console.log(obj.a);
foo(obj2);
console.log(obj2.a);
console.log(a);
*/

// 循环语句
/*
var box = {
    name: 'box1',
    shape: 'rect',
    open: function() {
        console.log('盒子已经打开了。');
    },
    close: function() {
        console.log('盒子已经关闭了。');
    }
};
var i;
console.log(box['name']);
for(i in box) {
    console.log(i, ' - ', box[i]);
}
*/

// do...while
/*
do{
    console.log('zz');
} while(false);
*/

// 注释
/**
 * author: maple
 * des: is a comment
 */

// 功能
/*
function open() {
    return 'zz';
    //console.log('zz');
}
//console.log(open());
function close(msg) {
    if(msg) {
        console.log(msg)
    } else {
        console.log('关上了。');
    }
} 
close();
close('又关上了。');
*/

// window
/*
console.log(parseInt('34ab'));
console.log(parseInt('34.55'));
console.log(parseFloat('34ab'));
console.log(parseFloat('34.55'));
console.log(parseFloat('34.55aaa'));
console.log(innerWidth);
console.log(innerHeight);
console.log(window.innerHeight);
window.setTimeout(function() {
    console.log('zz');
}, 100);
*/

// 输入
/*
var str = prompt('请输入');
console.log(str);
var str = prompt();
*/

// 输出
// alert('zz');
// document.write('zz');

// 事件
/*
var box11 = document.getElementById('box11');
box11.onclick = function() {
    console.log('zz');
    //box11.style.width = '400px';
    box11.style.width = parseInt(box11.style.width) + 100 + 'px';
};
*/

















































































































