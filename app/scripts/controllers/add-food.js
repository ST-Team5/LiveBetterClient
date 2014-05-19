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
    var fatsNumeric = parseInt(item.fats);
    var carbohydratesNumeric = parseInt(item.carbohydrates);
    var proteinsNumeric = parseInt(item.proteins);

    function isBetweenZeroAndHundred(value) {
      return value >= 0 && value <= 100;
    }

    return item.name &&
             $.isNumeric(item.calories) &&
             $.isNumeric(item.fats) && isBetweenZeroAndHundred(fatsNumeric) &&
             $.isNumeric(item.carbohydrates) && isBetweenZeroAndHundred(carbohydratesNumeric) &&
             $.isNumeric(item.proteins) && isBetweenZeroAndHundred(proteinsNumeric) &&
             fatsNumeric + carbohydratesNumeric + proteinsNumeric <= 100;
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
