'use strict';

angular.module('lbClientApp')
  .controller('MainCtrl', function ($scope, $controller) {
      angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
    });
