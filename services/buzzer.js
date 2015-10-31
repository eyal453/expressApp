module.exports = function (router, basePath) {
	
	//var GpioPin = require("gpio-promise");
	var gpio = require("gpio");
	
	var isBuzzing = false;
	
	function post(req, res) {
		var action = req.params.action;
		if (action == "buzz") {
			if (isBuzzing) {
				return res.status(400).send("Buzzing already");
			}
			isBuzzing = true;
			var pin4 = gpio.export(4, {
				direction: "out",
				interval: 200,
				ready: function () {
					pin4.set(1);
					setTimeout(function () {
						pin4.set(0);
						isBuzzing = false;
					}, 2000)
				}
			});
			res.status(200).send("Buzzing door");
			return;
		}
		if (action == "ring") {
			res.status(200).send("Ringing bell");
			return;
		}
		
		return res.status(400).send("Invalid action");
	}
	
	
	function register() {
		router.post(basePath + "/:action", post);
	}
	
	return {
		register: register
	};
};
