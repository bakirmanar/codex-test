/* eslint no-console:0*/
angular.module('serialsAppModule', [
    'ui.router',
    'ngMaterial',
    'ngSanitize',

    'serials',
    'serial'
])
    .controller('serialsAppController', serialsAppController);

function serialsAppController() {
    console.log('App version: ' + 'Dev version');
}
