'use strict';

angular.module('lbClientApp')
  .controller('SelectFoodCtrl', function ($scope, $controller, GetFoodServiceData) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetFoodServiceData);

    $scope.send = function () {
      console.log('send food!');
    };
  });
