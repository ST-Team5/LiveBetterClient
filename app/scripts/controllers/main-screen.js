'use strict';

angular.module('lbClientApp')
  .controller('MainScreenCtrl', function ($scope, $controller, MainScreenData) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    function setProgress(percent) {
      $scope.progressBarStyle = {
        width: percent + '%'
      };
    }

    setProgress(MainScreenData.progress);
    $scope.targetTimestamp = MainScreenData.timestamp;
    $scope.caloriesConsumed = MainScreenData.caloriesConsumed;
    $scope.caloriesBurned = MainScreenData.caloriesBurned;
    $scope.caloriesRemaining = MainScreenData.caloriesRemaining;
    $scope.minutesExercised = MainScreenData.minutesExercised;
  });
