module.exports = function (router) {

	function registerBooks() {
		var books = require('./services/books');
		router.get('/books', books.get);
		router.post('/books', books.post);
		router.delete('/books/:id', books.delete);
		router.patch('/books/:id', books.patch);
	}

	return {
		registerAll: function () {
			registerBooks();
		}
	};
};