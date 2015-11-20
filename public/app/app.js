angular.module('buzzer', ['ui.router', 'angular-gestures'])
	.config(['$stateProvider', '$urlRouterProvider', 'hammerDefaultOptsProvider',
		function ($stateProvider, $urlRouterProvider, hammerDefaultOptsProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'app/views/main.html',
					controller: 'mainController',
					controllerAs: 'vm'
				});

			hammerDefaultOptsProvider.set({
				recognizers:[[Hammer.Tap,{}],[Hammer.Press,{}]]
			})

		}]);