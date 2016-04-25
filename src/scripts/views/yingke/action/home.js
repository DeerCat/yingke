
var indexTpl = require('../tpl/home.string');
var utilAjax = require('../util/util-ajax.js');
require('../lib/swiper.js');
require('../lib/iscroll-4.js')
//定义视图 （QApp框架）
QApp.defineView('home', {
	html: indexTpl,
	//添加插件
	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],
	options:{
		tag:'action-type',
		eventType:'tap'
	},
	init: {
		vm: null
	},
	//视图生命周期动作绑定
	bindActions: {
		// 测试 绑定action-type="dyzb"的dom元素的tap事件
		'dyzb':function(e,data){
			console.log(e,data);
			console.log(this)
		}
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
		$('.pullUpArea').hide();
		$('.pullDownArea').hide();
		var goodsList = new Swiper('.swiper-goods', {
			direction: 'horizontal',
			onSlideChangeEnd: function(swiper){
				//console.log(swiper)
				console.log(swiper.activeIndex);
				var count = swiper.activeIndex;
				$(".goods-list .list").toggleClass("selected");
			}
		});
		var homeScroll = new iScroll('wrapper',{
			scrollbars: true,
			onScrollEnd:function(){
				//console.log(this.dirY)
			},
			onScrollMove:function(){
				if(this.y >= 20){
					$('.pullDownArea').show();
					$('.pullDownArea .iconfont').hide();
					$('.pullDownArea .step1').show();
					$('.pullDownArea .step2').hide();
				}
				if(this.y >= 40){
					$('.pullDownArea .step1').hide();
					$('.pullDownArea .step2').show();
					$('.pullDownArea .iconfont').show();
				}
				console.log();
				console.log(this.maxScrollY);
				if(this.maxScrollY-this.y > 20){
					$('.pullUpArea').show();
					$('.pullUpArea .iconfont').hide();
					$(".pullUpArea .step1").show();
					$(".pullUpArea .step2").hide();
				}
				if(this.maxScrollY-this.y > 60){
					console.log("上拉超出")
					$('.pullUpArea').show();
					$('.pullUpArea .iconfont').show();
					$(".pullUpArea .step1").hide();
					$(".pullUpArea .step2").show();
				}
			},
			//
			onTouchEnd:function(){
				//console.log(this.y)
				if(this.y >= 20){
					console.log(this.y)
					$('.pullDownArea').hide();
					//this.refresh();
					var self = this
					//下拉刷新 后期改为数据刷新请求成功后执行
					//setTimeout(function(){
					//	$('.pullDownArea').hide();
					//	self.refresh();
					//	console.log("下拉重绘完成")
                    //
					//},1500)

				}
				if(this.y >= 40){
					$('.pullDownArea').show();
					this.refresh();
					var self = this
					//下拉刷新 后期改为数据刷新请求成功后执行
					setTimeout(function(){
						$('.pullDownArea').hide();
						self.refresh();
						console.log("下拉重绘完成")

					},1500)
				}
				if(this.maxScrollY-this.y > 20){
					$('.pullUpArea').hide();
				}
				if(this.maxScrollY-this.y > 60){
					console.log("上拉超出")
					var self = this;
					$('.pullUpArea').show();
					this.refresh();
					//上拉加载 后期改成数据加载完成后执行下面函数
					setTimeout(function(){
						$('.pullUpArea').hide();
						self.refresh();
						console.log("上拉重绘完成")

					},1500)
				}
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
