'use strict';

angular.module('lbClientApp')
  .service('GetActivitiesService', function($http, SERVER_ADDRESS, $q) {
    this.getAll = function() {
      var deferred = $q.defer();
      var result = {};
      var counter = 0;

      function notifyIfReady() {
        if (counter >= 3) {
          deferred.resolve(result);
        }
      }

      $http.get(SERVER_ADDRESS + 'activities/list').success(function(data) {
        counter++;
        result.all = data;
        notifyIfReady();
      });

      $http.get(SERVER_ADDRESS + 'activities/list').success(function(data) {
        counter++;
        result.recent = data;
        notifyIfReady();
      });

      $http.get(SERVER_ADDRESS + 'activities/list').success(function(data) {
        counter++;
        result.frequent = data;
        notifyIfReady();
      });

      return deferred.promise;
    };
  });