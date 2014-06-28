'use strict';

angular.module('lbClientApp')
  .controller('MainScreenCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
  });
