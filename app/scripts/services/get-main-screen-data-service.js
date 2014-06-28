'use strict';

angular.module('lbClientApp')
  .service('GetMainScreenDataService', function ($http, SERVER_ADDRESS, $q) {
    this.getData = function (date) {
      var deferred = $q.defer();

      var actualDate = date ? date : new Date();

      setTimeout(function () {
        deferred.resolve({
          timestamp: actualDate.getTime(),
          caloriesConsumed: 1337,
          caloriesBurned: 337,
          caloriesRemaining: 1000,
          minutesExercised: 66,
          progress: 76
        });
      }, 1000);

      return deferred.promise;
    };
  });