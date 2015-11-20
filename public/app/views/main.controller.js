angular.module('buzzer')
	.controller('mainController', ['apiService', function (apiService) {
		this.buzz = function (stop) {
			apiService.buzz(stop).then(
				function () {

				}, function () {

				});
		}
		
		this.hold = function(){
			console.log("holding");
		}
		
		this.release = function(){
			console.log("release");
		}
	}]);