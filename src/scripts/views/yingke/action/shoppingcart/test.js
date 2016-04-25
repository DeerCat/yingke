var testHtml = require("../../tpl/shoppingcart/test.string")
QApp.defineView("test",{
    html:testHtml,
    plugins:["delegated","ajax",'avalon'],
    bindEvents:{
        beforeShow:function(){

        }

    },
    styles:{
        'position':'relative !important;',
        'background':'blue'
    },
    ready:function(){
        var vm = avalon.define({
            $id :"test",
            name:"zhaoyong"
        })

    },
    options:{
        tag:'action-type',
        eventType:'tap'
    },
    bindActions:{
        'backBtn':function(){
            console.log('退回首页');
            QApp.router.back();

        }
    }

})
