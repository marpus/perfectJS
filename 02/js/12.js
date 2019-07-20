// 12. 数字代号判断
console.log(document.title);

var num = prompt('请输入数字');
// console.log(num);

if(num >=90 && num <= 100) {
    console.log('A');
} else if(num >=80 && num < 90) {
    console.log('B');
} else if(num >= 60 && num < 80) {
    console.log('C');
} else if(num < 60 && num >= 0) {
    console.log('D');
} else {
    console.log('E');
}