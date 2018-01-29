/* eslint no-console:0*/
angular.module('serialsAppModule', [
    'ui.router',
    'ngMaterial',
    'ngSanitize',

    'serials'
])
    .config(config)
    .run(run)
    .controller('serialsAppController', serialsAppController);

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
}

function run() {
}

function serialsAppController() {
    console.log('App version: ' + 'Dev version');
}

