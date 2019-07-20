// 05. 打印合理的商品价格
console.log(document.title);

// var arr = [{}, 123, 'abc', {}, {}];

var productionArr = [
    {
        price: 200,
        name: '三加二'
    },
    {
        price: 90,
        name: '娃哈哈'
    },
    {
        price: 110,
        name: '王中王'
    },
    {
        price: 150,
        name: '康师傅'
    },
    {
        price: 80,
        name: '矿泉水'
    }
];

var i;
for(i=0; i<productionArr.length; i++) {
    if(productionArr[i].price > 100) {
        console.log(productionArr[i].name, ' - ', productionArr[i].price);
    }
}