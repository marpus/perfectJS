// 02. 显示隐藏方框
console.log(document.title);

var btn = document.getElementById('box4');
var box = document.getElementById('box3');
console.log(btn);
console.log(box);

btn.onclick = function() {
    box.style.display = 'block';
};
box.onclick = function() {
    box.style.display = 'none';
}