// 04. 使用 with 遍历一个元素的行内样式
console.log(document.title);

var box2 = document.getElementById('box2');
box2.style.width = '300px';
box2.style.height = '300px';
box2.style.position = 'relative';

console.log(box2);
console.log(box2.style);
console.log(box2.style.length);

var i;
for(i=0; i<box2.style.length; i++) {
    console.log(box2.style[i]);
    // with(box2.style) {
    //     console.log(eval(i));
    // }
    with(box2.style) {
        // width heigth postion
        console.log(box2.style[i], ' - ', eval(box2.style[i]));
    }  
}

for(i=0; i<box2.style.length; i++) {
    console.log(box2.style[i], ' - ' , box2.style[box2.style[i]]);
}