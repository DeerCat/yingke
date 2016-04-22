
var indexTpl = require('../tpl/shoppingcart.string');
var utilAjax = require('../util/util-ajax.js');

QApp.defineView('shoppingcart', {
		html: indexTpl,

		plugins: ['delegated', 'ajax','doms', {
			name: 'avalon',
			options: function (vm) {
				vm.list = [];
			}
		}],
		//modules:[{
		//	name:"content",
		//	container:".m-shoppingcart-body",
		//	views:[""],
		//	defaultTag:"user"
		//}],
		//init: {
		//	curTag:"user",
		//	vm: null
		//},

		bindActions: {},
		ready: function () {
			$(".m-shoppingcart .backBtn").on("tap",function(){
				//QApp.router.open("user")
			})

		},
	}

);
