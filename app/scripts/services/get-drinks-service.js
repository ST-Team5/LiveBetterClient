'use strict';

angular.module('lbClientApp')
  .service('GetDrinksService', function ($http, SERVER_ADDRESS, $q, CURRENT_USER_ID) {
    this.getAll = function() {
      var deferred = $q.defer();
      var result = {};
      var counter = 0;

      function notifyIfReady() {
        if (counter >= 3) {
          deferred.resolve(result);
        }
      }

      $http.get(SERVER_ADDRESS + 'drinks/list').success(function(data) {
        counter++;
        result.all = data;
        notifyIfReady();
      });

      $http.get(SERVER_ADDRESS + 'drinks/list/recent' + CURRENT_USER_ID).success(function(data) {
        counter++;
        result.recent = data;
        notifyIfReady();
      });

      $http.get(SERVER_ADDRESS + 'drinks/list/frequent' + CURRENT_USER_ID).success(function(data) {
        counter++;
        result.frequent = data;
        notifyIfReady();
      });
      
      return deferred.promise;
    };
  });
