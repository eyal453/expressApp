angular.module('buzzer')
	.controller('mainController', ['apiService', function (apiService) {
		this.buzz = function (stop) {
			apiService.buzz(stop).then(
				function () {

				}, function () {

				});
		}
	}]);