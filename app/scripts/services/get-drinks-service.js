'use strict';

angular.module('lbClientApp')
  .service('GetDrinksService', function ($http, SERVER_ADDRESS, $q) {
    this.getAll = function() {
      var deferred = $q.defer();
      $http.get(SERVER_ADDRESS + 'drinks/list').success(function(data) {
        return deferred.resolve(data);
      });
      return deferred.promise;
    };
  });
