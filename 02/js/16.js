// 16. 通过DOM创建一个div元素
console.log(document.title);

var div = document.createElement('div');
div.id = 'create';
div.className = 'create';

div.style.width = '300px';
div.style.height = '300px';
div.style.background = 'orange';

// console.log(div);

var body = document.getElementsByTagName('body')[0];
// console.log(body);

// body.append(div);
var script = document.getElementsByTagName('script')[0];
// console.log(script);
body.insertBefore(div, script);
































