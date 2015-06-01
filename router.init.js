module.exports = function (router) {
	var books = require('./services/books')(router,'/books');

	return {
		registerAll: function () {
			books.register();
		}
	};
};