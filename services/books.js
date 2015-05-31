module.exports = {
	get: function (req, res) {
		return res.json({ message: "this is a successful get" });
	},
	post: function (req, res) {
		return res.json({ message: "You just send this json", req_body: req.body });
	},
	delete: function (req, res) {
		return res.json({ deleted: true, book_id: req.params.id });
	},
	patch: function (req, res) {
		return res.json({ patched: true, book_id: req.params.id });
	}
};
