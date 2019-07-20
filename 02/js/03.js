// 03. 模仿块级作用域
console.log(document.title);

// console.log(yuangongRoad());
(function() {
    var yuangong = '小明';
    function yuangongRoad() {
        console.log('您已进入员工通道');
    }
    yuangongRoad();
    console.log(yuangong);
})();
// console.log(yuangong);
// console.log(yuangongRoad());