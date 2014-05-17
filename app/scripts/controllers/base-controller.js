'use strict';

angular.module('lbClientApp')
  .controller('BaseCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
      };
  });
