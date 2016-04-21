
var indexTpl = require('../tpl/shoppingcart.string');
var utilAjax = require('../util/util-ajax.js');

QApp.defineView('shoppingcart', {
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
		
	}

	
});
