'use strict';

angular.module('lbClientApp')
  .controller('ActivityCtrl', function ($scope, $controller, ActivityService) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    $scope.insertActivity = function () {
      var name = $scope.newActivity.name;
      var calories = $scope.newActivity.calories;

      ActivityService.insertActivity(name, calories);

      $scope.newActivity.name = '';
      
      $scope.newActivity.calories = {
          lightly: '',
          moderate: '',
          veryActive: ''
      };
    };
  });