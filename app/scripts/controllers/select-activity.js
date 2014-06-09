'use strict';

angular.module('lbClientApp')
  .controller('SelectActivityCtrl', function ($scope, $controller, GetActivitiesServiceData, SelectActivitiesService) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetActivitiesServiceData);

    $scope.send = function (selectedActivities) {
      SelectActivitiesService.selectActivities(selectedActivities, $scope.removeSelection);
    };
  });