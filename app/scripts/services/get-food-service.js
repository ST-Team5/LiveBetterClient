'use strict';

angular.module('lbClientApp')
  .service('GetFoodService', function ($http, SERVER_ADDRESS, $q) {
    this.getAll = function() {
      var deferred = $q.defer();
      $http.get(SERVER_ADDRESS + 'meals/list').success(function(data) {
        return deferred.resolve(data);
      });
      return deferred.promise;
    };
  });
