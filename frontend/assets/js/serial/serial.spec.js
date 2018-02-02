describe('Serial controller', function () {
    var vm;
    var createController;

    beforeEach(angular.mock.module('serialsAppModule'));
    beforeEach(angular.mock.module('serial'));
    beforeEach(inject(function ($controller) {
        createController = function () {
            return $controller('serialController');
        };
    }));

    it('should create right array of seasons', function () {
        vm = createController();
        vm.serial = {
            seasons: 3,
        };
        vm.setSeasonsData();
        expect(vm.seasons).toEqual(['all', 1, 2, 3]);
    });
});
