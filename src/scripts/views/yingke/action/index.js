var indexTpl = require('../tpl/index.string');
var _ = QApp.util;

var TAGS = ["home","classtify","shoppingcart","user"]
QApp.defineView('index', {
	html: indexTpl,
	plugins: ['delegated',"doms"],
	bindActions: {

	},
	modules:[{
		name:"content",
		container:".m-index-body",
		views:TAGS,
		defaultTag:"home"
	}],

	bindEvents: {
		'beforeShow': function() {
			
		}
	},
	init:{
		curTag:"home",
		switchTab:function(tag){
			if(TAGS.indexOf(tag)>-1){
				_.removeClass(this.doms[this.curTag],"active");
				_.addClass(this.doms[tag],"active");
				this.modules.content.launch(tag);
				this.curTag = tag;
			}
		}
	},
	bindActions: {
		'tab.switch': function(e, data) {
            this.switchTab(data.tag);
        }
         
	}
});
