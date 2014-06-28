'use strict';

angular.module('lbClientApp')
  .controller('MainScreenCtrl', function ($scope, $controller, $routeParams) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    function setProgress(percent) {
      $scope.progressBarStyle = {
        width: percent + '%'
      };
    }

    function getTargetDate() {
      var result = new Date();
      var dateParameter = $routeParams.date;
      if (dateParameter) {
        if (!dateParameter.match(/20\d\d(0|1)\d(1\d|2\d|3(0|1))/g)) {
          throw new Error('Invalid date provided.');
        }

        var year = parseInt(dateParameter.substr(0, 4));
        var month = parseInt(dateParameter.substr(4, 2)) - 1;
        var day = parseInt(dateParameter.substr(6, 2));
        result = new Date(year, month, day);
      }
      return result;
    }

    var targetDate = getTargetDate();
    setProgress(76);
    $scope.targetTimestamp = targetDate.getTime();
    $scope.caloriesConsumed = 1337;
    $scope.caloriesBurned = 337;
    $scope.caloriesRemaining = $scope.caloriesConsumed - $scope.caloriesBurned;
    $scope.minutesExercised = 66;
  });
