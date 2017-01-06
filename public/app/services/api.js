angular.module('buzzer')
	.factory('apiService', ['$http', '$q',
		function ($http, $q) {
			var apiUrl = 'http://192.168.1.30:8080/api/buzzer/';

			function buzz(stop) {
				var url = apiUrl + 'buzz'
				if (stop) {
					url += '/stop'
				}
				var def = $q.defer();
				$http.post(url, {})
					.success(function (res) {
						def.resolve(res);
					}).error(function (err) {
						def.reject(err);
					});

				return def.promise;
			}

			return {
				buzz: buzz
			}
		}]);