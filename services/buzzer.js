module.exports = function (router, basePath) {

	//var GpioPin = require("gpio-promise");
	var gpio = require("gpio");
	var pin23 = gpio.export(23, {
		direction: "out",
		interval: 200,
		ready: function () {
			pin23.set(0);
		}
	});
	var pin24 = gpio.export(24, {
		direction: "out",
		interval: 200,
		ready: function () {
			pin24.set(0);
		}
	});
	var to;

	var isBuzzing = false;

	function setOnOff(on) {
		pin23.set(on ? 1 : 0);
		pin24.set(on ? 1 : 0);
	}

	function isPositiveInteger(n) {
		return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
	}

	function buzz(req, res) {
		var action = req.params.action;
		var isStop = action == 'stop';
		var seconds = 6;
		var reply = isStop ? 'stopping buzzer' : 'buzzing door';
		if (isBuzzing && !isStop) {
			//not a stop command and currently buzzing so get out
			return res.status(400).send("Buzzing already");
		}
		var worker;
		clearTimeout(to);
		if (isStop) {
			isBuzzing = false;
			worker = function () {
				setOnOff(false);
			}
		} else {
			isBuzzing = true;
			worker = function () {
				setOnOff(true);
				to = setTimeout(function () {
					setOnOff(false);
					isBuzzing = false;
				}, seconds * 1000)
			}
		}

		pin23 = gpio.export(4, {
			direction: "out",
			interval: 200,
			ready: worker
		});
		res.status(200).send(reply);
	}

	function ring(req, res) {
		res.status(200).send("ringing");
	}

	function register() {
		router.post(basePath + "/buzz/:action?", buzz);
		router.post(basePath + "/ring", ring);
	}

	return {
		register: register
	};
};
