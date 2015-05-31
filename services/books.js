module.exports = {
	get: function (req, res) {
		return res.json({ message: "this is a successful get" });
	},
	post: function (req, res) {
		return res.json({ message: "You just send this json", req_body: req.body });
	}
};
