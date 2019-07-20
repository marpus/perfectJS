// 09. 去掉最后一行的下边距
console.log(document.title);

var ul = document.getElementById('ul');
// console.log(ul);
var li = document.getElementsByTagName('li');
console.log(li);

var i;
for(i=0; i<li.length; i++) {
    // console.log(li[i]);
    if(i > 4) {
        li[i].style.marginBottom = '0';
    }
}