'use strict';

angular.module('lbClientApp')
  .controller('AddFoodCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    $scope.item = {
      type: 'food'
    };

    $scope.isFood = function () {
      return $scope.item.type === 'food';
    };

    $scope.isBeverage = function () {
      return $scope.item.type === 'beverage';
    };

    $scope.selectFood = function () {
      $scope.item.type = 'food';
    };

    $scope.selectBeverage = function () {
      $scope.item.type = 'beverage';
    };

    $scope.quantityLabel = function () {
      return $scope.item.type === 'food' ? 'grams' : 'milliliters';
    };
  });
