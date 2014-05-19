'use strict';

angular.module('lbClientApp')
.controller('AddFoodCtrl', function ($scope, $controller, AddFoodService) {
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

  $scope.isInputValid = function () {
    var item = $scope.item;
    return item.name &&
             $.isNumeric(item.calories) &&
             $.isNumeric(item.fats) &&
             $.isNumeric(item.carbohydrates) &&
             $.isNumeric(item.proteins);
  };

  $scope.sendItem = function() {
    var item = $scope.item;

    function clearItem() {
      $scope.item = {
        type: item.type
      };
    }

    if ($scope.isFood()) {
      AddFoodService.addFood(item.name, item.calories,
        item.carbohydrates, item.fats, item.proteins, clearItem);
    } else {
      AddFoodService.addBeverage(item.name, item.calories,
        item.carbohydrates, item.fats, item.proteins, clearItem);
    }
  };
});
