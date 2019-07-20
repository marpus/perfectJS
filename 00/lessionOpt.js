function LessionOpt() {}
LessionOpt.prototype = {
    lessionData: {
        def: {
            title: 'JS完全解析',
            baseListPath: 'list/',
            ids: 'index',
            listHome: 'index'
        },
        numDic: [
            '一', '二'
        ],
        lessions: [
            {
                title: '对JS小试牛刀',
                dicNum: '01',
                ids: 'index',
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
                ]
            },
            {
                title: '客户端JS和ECMA基础',
                dicNum: '02',
                ids: 'index',
                lis: [{
                    title: '客户端JS和ECMA基础',
                    path: '00.html'
                },{
                    title: '使用表达式替换选择语句',
                    path: '01.html'
                },{
                    title: '幽灵方块',
                    path: '02.html'
                },{
                    title: '模仿块级作用域',
                    path: '03.html'
                },{
                    title: '使用 with 遍历一个元素的行内样式',
                    path: '04.html'
                },{
                    title: '打印合理的商品价格',
                    path: '05.html'
                },{
                    title: 'switch的应用 - 数字的运算',
                    path: '06.html'
                },{
                    title: '预览对象的非私有属性',
                    path: '07.html'
                },{
                    title: '一个死循环',
                    path: '08.html'
                },{
                    title: '去掉最后一行的下边距',
                    path: '09.html'
                },{
                    title: '九九乘法表',
                    path: '10.html'
                },{
                    title: 'break 和 continue 的不同',
                    path: '11.html'
                },{
                    title: '数字代号判断',
                    path: '12.html'
                },{
                    title: '抓13(do...while)',
                    path: '13.html'
                },{
                    title: '抓13(normal)',
                    path: '14.html'
                },{
                    title: '输入游戏',
                    path: '15.html'
                },{
                    title: '通过DOM创建一个div元素',
                    path: '16.html'
                },{
                    title: 'BOM中的一些对象的操作合集',
                    path: '17.html'
                },{
                    title: '严格模式与普通模式的不同展现',
                    path: '18.html'
                }]
            }
        ]    
    },
    def: '',
    numDic: '',
    page: 0,
    lessions: '',
    doc: document,
    setTitle: function(type) {
        var d = this.doc, str= '';
        if('list' === type) {
            str = this.def.title + '第' + this.numDic[this.page] + '章 - ' + this.lessions[this.page].title; 
        } else {
            str = this.def.title;
        }
        d.title.innerHTML = 
        d.getElementById('title').innerHTML = str;
    },
    getPageNum: function() {
        var href = window.location.href;
        this.page = --(href.split('#')[1]);
    },
    init: function(type) {
        var data = this.lessionData;
        this.def = this.def || data.def;
        this.numDic = this.numDic || data.numDic;
        this.lessions = this.lessions || data.lessions;
        this.getPageNum();
        this.setTitle(type);
        if(!type) this.indexGenerator()
        if('list' === type) this.listGenerator();
    },
    indexGenerator: function() {
        var i, str = '';
        for(i=0; i<this.lessions.length; i++) {
            str += '<li><a href="../'+ this.lessions[i].dicNum + '/' + this.def.listHome + '.html#' + (i + 1) +'">' + this.lessions[i].dicNum + '. ' + this.lessions[i].title + '</a></li>';
        }
        this.doc.getElementById(this.def.ids).innerHTML = str;
    },
    listGenerator: function() {
        var i, str = '', lis = this.lessions[this.page].lis;
        for(i in lis) {
            str += '<li><a href="'+ this.def.baseListPath + lis[i].path.split('.')[0] + '.html">' + lis[i].path.split('.')[0] + '. ' +lis[i].title + '</a></li>';  
        }
        this.doc.getElementById(this.def.ids).innerHTML = str;
    } 
};

var lessionOpt = new LessionOpt();