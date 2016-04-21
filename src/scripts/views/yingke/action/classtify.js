
var indexTpl = require('../tpl/classtify.string');
var utilAjax = require('../util/util-ajax.js');
require("../lib/dropload.js");
QApp.defineView('classtify', {
	html: indexTpl,

	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {

	},
	bindEvents: {
		// 'beforeShow': function() {
		// 	// var self = this;
		// 	// self.vm = this.getVM();
		// 	// utilAjax.query({
		// 	// 	url: "/interface/getList.do",
		// 	// 	success: function(rs){
		// 	// 		self.vm.list = rs.data;
		// 	// 	}
		// 	// });
		// 	var mySwiperr = new Swiper('.swiper-area > .swiper-container', {
		// 	    direction: 'horizontal',
		// 	    loop: true,
		// 	    prevButton:'.swiper-button-prev',
		// 		nextButton:'.swiper-button-next',
		// 		autoplay:3000,
		// 		autoplayDisableOnInteraction : false,

		// 	  });
		// 	droploadfun();
		// },
		
	}
	
})
function droploadfun(){
		
	var counter = 0;
    // 每页展示4个
    var num = 4;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.box').dropload({
         scrollArea:window,
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>刷新中...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">1暂无数据</div>'
        },
        autoLoad:true,
        loadUpFn : function(me){
        	
           utilAjax.query({
                
                url: '/interface/getList.do',
               
                success: function(data){

                    var result = '';
                    for(var i = 0; i < data.data.length; i++){
                        result +=   '<a class="item opacity">'
                                        +'<img src="'+data.data[i].imgSrc+'" alt="">'
                                        +'<h3>'+data.data[i].title+'</h3>'
                                       
                                    +'</a>';
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').html(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                        // 重置索引值，重新拼接more.json数据
                        counter = 0;
                        // 解锁
                        me.unlock();
                        me.noData(false);
                    },1000);
                },
                error: function(xhr, type){
                    // alert('Ajax error!');
                    // // 即使加载出错，也得重置
                    // me.resetload();
                }
            });
        },
        loadDownFn : function(me){
        	console.log(num,counter,pageStart,pageEnd)
            $.ajax({
                type: 'GET',
                url:'/interface/getList.do',
               
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    for(var i = pageStart; i < pageEnd; i++){
                        result +=   '<a class="item opacity" >'
                                        +'<img src="'+data.data[i].imgSrc+'" alt="">'
                                        +'<h3>'+data.data[i].title+'</h3>'
                                        +'<span class="date">'+data.data[i].date+'</span>'
                                    +'</a>';
                        if((i + 1) >= data.data.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').append(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
            
        },
         
        distance:50

    });

}