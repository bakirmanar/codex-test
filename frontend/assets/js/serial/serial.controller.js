angular.module('serial', [])
  .controller('serialController', serialController);

function serialController($stateParams, $state, serialsService) {
  var vm = this;
  vm.onSeasonSelect = onSeasonSelect;
  vm.go = go;
  vm.serial = {};
  vm.serials = [];
  vm.episodes = [];
  vm.seasons = ['all'];
  vm.selectedSeason = vm.seasons[0];
  vm.serialId = $stateParams.id;
  vm.search = {
    name: ''
  };

  serialsService.getSerial(vm.serialId)
    .then(function (response) {
      vm.serial = response.data;
      setSeasonsData();
      getEpisodes(vm.serialId);
    })
    .catch(function () {
      $state.go('serials');
    });

  function getEpisodes(serialId, season) {
    serialsService.getEpisodes(serialId, season)
      .then(function (response) {
        vm.episodes = response.data;
      });
  }

  function setSeasonsData() {
    for (var i = 1; i <= vm.serial.seasons; i++) {
      vm.seasons.push(i);
    }
  }

  function onSeasonSelect() {
    getEpisodes(vm.serialId, vm.selectedSeason);
  }

  function go(url, event) {
    event.preventDefault();
    $state.go(url);
  }
}
