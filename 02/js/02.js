// 02. 幽灵方块
console.log(document.title);

var box = document.getElementById('box');
// console.log(box);
setTimeout(function() {
    box.style.display = 'block';
    console.log('zz');
    setTimeout(function() {
        box.style.display = 'none';
        console.log('xx')
    }, 200);
}, 1000);
console.log('yy');