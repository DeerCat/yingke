

require('./action/index.js');
require("./action/home.js");
require("./action/shoppingcart.js");
require("./action/classtify.js");
require("./action/user.js");

QApp.config({
  indexView: 'index',
  hashRouter: true
});
