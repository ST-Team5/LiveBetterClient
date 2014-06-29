'use strict';

angular.module('lbClientApp')
  .controller('SelectDrinkCtrl',
  function ($scope, $controller, GetDrinksServiceData, SelectDrinksService) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    $scope.quantityLabel = 'Quantity (milliliters)';
    $scope.defaultQuantity = 100;

    this.initialize(GetDrinksServiceData);

    $scope.send = function (selectedDrinks) {
      SelectDrinksService.selectDrinks(selectedDrinks, $scope.removeSelection);
    };
  });
