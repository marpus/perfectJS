// 10. 九九乘法表
console.log(document.title);

/*
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9
...
9                      ... 9

行 1 列 1
行 2 列 12
行 3 列 123
...
行 9 列 123456789
行 1 - 9
列 1 - 行
 */

var i, j, str = '';
for(i=1; i<10; i++) {
    // str = '';
    for(j=1; j<=i; j++) {
        //console.log(j + '*' + i + '=' + i * j);
        str += j + '*' + i + '=' + i * j + ' ';
        if((i*j===6 || i*j===8) && j !== 1) {
            str += ' ';
        }
    }
    //console.log('\n');
    str += '\n';
    //console.log(str);
}
console.log(str);












