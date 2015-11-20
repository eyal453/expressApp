angular.module('buzzer')
	.directive('holdRelease', [function () {
		return {
			restrict: "A",
			link: function (scope, el, attr) {
				var holdAction = attr['holdCallback'];
				var releaseAction = attr['releaseCallback'];
				// debugger;
				// $(el).on('hold', function () {
				// 	scope.$eval(holdAction);
				// }).on('release', function () {
				// 	scope.$eval(releaseAction);
				// })
				var t = $(el)[0];
				t.addEventListener("touchstart", function () {
					scope.$eval(holdAction);
				});

				t.addEventListener("touchend", function () {
					scope.$eval(releaseAction);
				});

				t.addEventListener("touchcancel", function () {
					scope.$eval(releaseAction);
				});
			}
		}
	}]);