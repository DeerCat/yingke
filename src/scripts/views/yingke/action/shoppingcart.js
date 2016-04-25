
var indexTpl = require('../tpl/shoppingcart.string');
var utilAjax = require('../util/util-ajax.js');

QApp.defineView('shoppingcart', {
		html: indexTpl,

		plugins: ['delegated', 'ajax','doms', {
			name: 'avalon',
			options:{
				tag:"action-type",
				eventType:"tap"
			}
		}],



		bindActions: {
			"btn":function(){
				//alert('nihao')
				QApp.router.open("test")
			}
		},
		ready: function () {
			$(".m-shoppingcart .backBtn").on("tap",function(){
				require('./shoppingcart/test.js')

			})
			var vm = avalon.define({
				$id :"test",
				name:"zhaoyong"
			})

		},
	}

);
