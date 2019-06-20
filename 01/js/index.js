var list = {
    basePath: 'list/',
    lis: [{
            title: '对JS小试牛刀',
            path: '00.html'
        },{
            title: 'helloworld',
            path: '01.html'
        },{
            title: '显示隐藏方框',
            path: '02.html'
        },{
            title: '动起来的方框',
            path: '03.html'
        }
    ],
    i: 'index',
    init: function() {
        var list, arr, d = document, i, str = '';
        list = d.getElementById(this.i);
        arr = this.lis;
        for(i=0; i<arr.length; i++) { 
            str += '<li><a href='+ this.basePath + arr[i].path +'>' + arr[i].path.split('.')[0] + '. ' + arr[i].title + '</a></li>';
        }
        list.innerHTML = str;
    }
};
list.init();