'use strict';

angular.module('lbClientApp')
  .service('GetMainScreenDataService', function ($http, SERVER_ADDRESS, $q, CURRENT_USER_ID) {
    this.getData = function (date) {
      var deferred = $q.defer();

      var actualDate = date ? date : new Date();

      var url = SERVER_ADDRESS + 'mainScreen/' + CURRENT_USER_ID + '/' + actualDate.getFullYear() + '/' +
        (actualDate.getMonth() + 1) + '/' + actualDate.getDate();
      $http.get(url).success(function (data) {
        data.a = true;
        var consumedCalories = data.caloriesConsumed;
        var burnedCalories = data.caloriesBurned;
        var remainingCalories = data.caloriesRemaining;
//        var progress = (burnedCalories / (burnedCalories + remainingCalories)) * 100;
        var progress = (burnedCalories / 2000) * 100;
        deferred.resolve({
          timestamp: actualDate.getTime(),
          caloriesConsumed: consumedCalories,
          caloriesBurned: burnedCalories,
          caloriesRemaining: remainingCalories,
          minutesExercised: data.minutesExercised,
          progress: progress
        });
      });

      return deferred.promise;
    };
  });