angular.module('serialsAppModule').service('serialsService', function ($http) {
  var self = this;
  var api = appConfig.api;

  self.getSerials = function () {
    return $http.get(api + '/serials');
  }
});
