module.exports = function (router) {
	function registerBooks() {
		var books = require('./services/books');
		router.get('/books', books.get);
		router.post('/books', books.post);
	}

	return {
		registerAll: function () {
			registerBooks();
		}
	};
};