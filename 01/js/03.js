// 03. 动起来的方框
console.log(document.title);

var box = document.getElementById('box5');
box.style.left = '45px';

var t = setInterval(function() {
    box.style.left = parseInt(box.style.left) + 10 + 'px';
    console.log(parseInt(box.style.left) + 10 + 'px');
    // console.log('z - ' + box.style.left);
    if(parseInt(box.style.left) === 985) {
        clearInterval(t);
    } 
}, 100);
