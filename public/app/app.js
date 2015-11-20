angular.module('buzzer', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'app/views/main.html',
					controller: 'mainController',
					controllerAs:'vm'
				})

		}]);