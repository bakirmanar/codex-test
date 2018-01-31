angular.module('serialsAppModule').config(config);

function config($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
    });

    $stateProvider
        .state('serials', {
            url: '/',
            templateUrl: 'serials/serials.html',
            controller: 'serialsController',
            controllerAs: 'vm',
        });

    $stateProvider
        .state('serial', {
            url: '/serial/:id',
            templateUrl: 'serial/serial.html',
            controller: 'serialController',
            controllerAs: 'vm',
        });
}
