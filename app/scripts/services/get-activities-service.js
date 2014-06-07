'use strict';

angular.module('lbClientApp')
  .service('GetActivitiesService', function ($http, SERVER_ADDRESS, $q) {
    this.getAll = function() {
      var deferred = $q.defer();
      $http.get(SERVER_ADDRESS + 'activities/list').success(function(data) {
        return deferred.resolve(data);
      });
      return deferred.promise;
    };
  });
