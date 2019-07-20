// 06. switch的应用 - 数字的运算
console.log(document.title);

var num = 48;
var str = '#';
switch(str) {
    case '+':
        num += num; // num = num + num
        break;
    case '-':
        num = num - num;
        break;
    case '*':
        num = num * 2;
        break;
    case '/':
        num = num / 2;
        break;
    case '&':
        num = 0;
        break;
    case '!': 
        num = 0;
        break;
    case '~': 
        num = 0;
        break;
    default: 
        num = 0;
        break;
}
console.log(num);