'use strict';

angular.module('lbClientApp')
  .controller('SelectDrinkCtrl', function ($scope, $controller, GetDrinksServiceData) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetDrinksServiceData);

    this.send = function () {
      console.log('send drink!');
    };
  });
