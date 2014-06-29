'use strict';

angular.module('lbClientApp')
  .controller('MainScreenCtrl', function ($scope, $controller, $location, $filter, MainScreenData) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    function setProgress(percent) {
      $scope.progressBarStyle = {
        width: percent + '%'
      };
    }

    $scope.showPicker = false;

    $scope.today = new Date();
    $scope.selectedDate = new Date(MainScreenData.timestamp);

    $scope.$watch('selectedDate', function (newDate, oldDate) {
      if (oldDate && newDate && newDate.getTime() != oldDate.getTime()) {
        $location.path("main-screen/" + $filter('date')(newDate, "yyyyMMdd"));
      }
    }, true);

    setProgress(MainScreenData.progress);
    $scope.targetTimestamp = MainScreenData.timestamp;
    $scope.caloriesConsumed = MainScreenData.caloriesConsumed;
    $scope.caloriesBurned = MainScreenData.caloriesBurned;
    $scope.caloriesRemaining = Math.max(0, MainScreenData.caloriesRemaining);
    $scope.minutesExercised = MainScreenData.minutesExercised;
  });
