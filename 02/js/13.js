// 13. 抓13(do...while)
console.log(document.title);

var num = 98;
var count = 0;
var count2 = 0;
var str = '';
var str2 = '';

do {
    if(count === 0) {
        console.log('starting');
        count++;
        // console.log(count);
    } else {
        num--;
    }
    if(count2 === 13) {
        str += num + ' ';
        count2 = 0; 
    } else {
        str2 += num + ' ';
    }
    count2 = count2 + 1;
} while(num >= 0);
console.log(str);
console.log(str2);
console.log('ending');




