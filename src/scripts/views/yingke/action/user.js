
var indexTpl = require('../tpl/user.string');
var utilAjax = require('../util/util-ajax.js');

QApp.defineView('user', {
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