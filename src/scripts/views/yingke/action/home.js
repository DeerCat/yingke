
var indexTpl = require('../tpl/home.string');
var utilAjax = require('../util/util-ajax.js');
require('../lib/swiper.js');
//定义视图 （QApp框架）
QApp.defineView('home', {
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
	// 视图生命周期事件绑定
	bindEvents:{
		'beforeShow': function() {
			// var self = this;
			// self.vm = this.getVM();
			// utilAjax.query({
			// 	url: "/interface/getList.do",
			// 	success: function(rs){
			// 		self.vm.list = rs.data;
			// 	}
			// });
			// 首页焦点轮播图
			var IndexFocus = new Swiper('.swiper-focus', {
				direction: 'horizontal',
				loop: true,
				autoplay:3000,
				autoplayDisableOnInteraction : false,
				pagination : '.swiper-pagination',

			});


		},

	},
	// 视图创建完成的回调
	ready:function(){
		//首页商品展示滑动切换效果
		var goodsList = new Swiper('.swiper-goods', {
			direction: 'horizontal',
			onSlideChangeEnd: function(swiper){
				//console.log(swiper)
				console.log(swiper.activeIndex);
				var count = swiper.activeIndex;
				$(".goods-list .list").toggleClass("selected");
			}
		});
		$(".m-home-header .backBtn").on("tap",function(){
			console.log($(this));

		})
		$(".m-home-header .searchBth").on("tap",function(){
			console.log($(this));
		})
		$(".category-level1 li a img").on("tap",function(){
			console.log($(this).parent().parent().index());
		})
		//首页商品展示上方选项与下方滑动切换效果联动
		$(".goods-list .list").on("tap",function(){
			//$(this).addClass("selected").siblings().removeClass("selected");
			var count = $(this).attr("data-count");
			goodsList.slideTo(count);
		})
	}


	
});
