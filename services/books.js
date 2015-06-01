module.exports = function (router, basePath) {

	function logRequest(req) {
		console.log(req.method + " recieved at " + req.originalUrl);
	}
	function get(req, res) {
		logRequest(req);
		return res.json({ message: "this is a successful get" });
	}

	function post(req, res) {
		logRequest(req);
		return res.json({ message: "You just send this json", req_body: req.body });
	}

	function del(req, res) {
		logRequest(req);
		return res.json({ deleted: true, book_id: req.params.id });
	}

	function patch(req, res) {
		logRequest(req);
		return res.json({ patched: true, book_id: req.params.id, stam: true });
	}

	function register() {
		router.get(basePath, get);
		router.post(basePath, post);
		router.patch(basePath + "/:id", patch);
		router.delete(basePath + "/:id", del);
	}

	return {
		register: register
	};
};
