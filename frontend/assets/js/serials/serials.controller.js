angular.module('serials', [])
  .controller('serialsController', serialsController);

function serialsController(serialsService) {
  var vm = this;
  vm.serials = [];

  serialsService.getSerials().then(function (response) {
    vm.serials = response.data;
    console.log(vm.serials);
  });
}
