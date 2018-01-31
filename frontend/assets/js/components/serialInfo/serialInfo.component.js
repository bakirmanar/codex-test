angular.module('serials').component('serialInfo', {
    templateUrl: 'components/serialInfo/serialInfo.html',
    controllerAs: 'vm',
    bindings: {
        serial: '=',
    },
});
