angular.module('serials', [])
  .controller('serialsController', serialsController);

function serialsController(serialsService, $state) {
  var vm = this;
  vm.go = go;
  vm.serials = [];

  serialsService.getSerials().then(function (response) {
    vm.serials = response.data;
  });

  function go(url, serialId, event) {
    event.preventDefault();
    $state.go(url, {
      id: serialId
    });
  }
}
