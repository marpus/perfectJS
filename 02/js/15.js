// 15. 输入游戏
console.log(document.title);

var str = '';
var keyFlag = 0;
window.onkeypress = function(e) {
    // console.log(e);
    // console.log(e.key.toLowerCase());
    // console.log('zz');
    if(keyFlag !== 1) {
        var keys = e.key.toLowerCase();
        switch(keys) {
            case 'e':
            case 'n':
            case 'd':
                keyFlag = 1;
                console.log(str);
                break;
            default: 
                console.log(str += keys); // str = str + keys
                break;
        }
    }
};