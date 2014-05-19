'use strict';

angular.module('lbClientApp')
  .controller('ActivityCtrl', function ($scope, $controller, ActivityService) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    $scope.insertActivity = function () {
      var name = $scope.newActivity.name;
      var type = $scope.newActivity.type;
      var calories = $scope.newActivity.calories;

      ActivityService.insertActivity(name, type, calories);

      $scope.newActivity.name = '';
      $scope.newActivity.type = '';
      $scope.newActivity.calories = '';
    };
  });