// 01. 使用表达式替换选择语句
console.log(document.title);

var num = 99;
if(num < 50) {
    num = num + 50;
} else {
    num = num - 50;
}
console.log(num);

var num2 = 99;
num2 = num2 < 50 ? num2 + 50 : num2 - 50;
console.log(num2);

var num3 = 99;
num3 = num3 < 50 ? num3 = num3 + 50 : num3 = num3 - 50;
console.log(num3);

// var num4 = 99;
// if(if(num4 < 50) {}) {
//     num4 = num4 + 50;
// } else {
//     num4 = num4 - 50;
// }
// console.log(num4);