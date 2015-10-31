module.exports = function (router) {
	var books = require('./services/books')(router,'/books');
	var buzzer = require('./services/buzzer')(router,'/buzzer');

	return {
		registerAll: function () {
			books.register();
			buzzer.register();
		}
	};
};