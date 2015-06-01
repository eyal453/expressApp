module.exports = function (router, basePath) {

	function get(req, res) {
		return res.json({ message: "this is a successful get" });
	}

	function post(req, res) {
		return res.json({ message: "You just send this json", req_body: req.body });
	}

	function del(req, res) {
		return res.json({ deleted: true, book_id: req.params.id });
	}

	function patch(req, res) {
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
