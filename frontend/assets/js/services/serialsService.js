angular.module('serialsAppModule').service('serialsService', function ($http) {
  var self = this;
  var api = appConfig.api;

  self.getSerials = function () {
    return $http.get(api + '/serials');
  };

  self.getSerial = function (id) {
    return $http.get(api + '/serials/' + id);
  };

  self.getEpisodes = function (serialId, season) {
    let seasonQuery = _.isNumber(season) ? ('?season=' + season) : '';
    return $http.get(api + '/serials/' + serialId + '/episodes' + seasonQuery);
  }
});
