// 14. 抓13(normal)
console.log(document.title);

var num = 98;
var count = 0;
var str = '';
var str2 = '';

console.log('starting');
while(num >= 0) {
    num--;
    count = count + 1;
    if(count === 13) {
        str += num + ' ';
        count = 0;
    } else {
        str2 += num + ' ';
    }
}
console.log(str);
console.log(str2);
console.log('ending');