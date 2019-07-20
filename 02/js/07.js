// 07. 预览对象的非私有属性
console.log(document.title);

var box = {
    name: 'box1',
    shape: 'rect',
    _open: function() {
        console.log('盒子又打开了。');
    },
    _close: function() {
        console.log('盒子又关闭了。');
    },
    options: function() {
        if(box.boxFlag = true) {
            box._close();
            box._boxFlag = false;
        } else {
            box._open();
            box._boxFlag = true;
        }
    },
    _boxFlag: ''
};
// box.boxFlag = 25;
// console.log(box.boxFlag);
var i;
for(i in box) 
    if(i.indexOf('_') === -1) 
        console.log(i, ' - ', box[i]);
        // console.log(i);
box._boxFlag = 25;
console.log(box._boxFlag)



