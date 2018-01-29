angular.module('serials').component('rating', {
  templateUrl: 'components/rating/rating.html',
  controller: ratingController,
  controllerAs: 'vm',
  bindings: {
    value: '=',
    max: '=',
  }
});

function ratingController($scope) {
  var vm = this;

  $scope.$watch(function () {
    return vm.max
  }, function (n, o) {
    console.log(n);
    !n && (vm.max = 100);

    console.log(vm.max);
  });
}