'use strict';

angular.module('lbClientApp')
  .controller('SelectFoodCtrl',
  function ($scope, $controller, GetFoodServiceData, SelectFoodsService) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    $scope.quantityLabel = 'Quantity (grams)';
    $scope.defaultQuantity = 100;

    this.initialize(GetFoodServiceData);

    $scope.send = function (selectedFoods) {
      SelectFoodsService.selectFoods(selectedFoods, $scope.removeSelection);
    };
  });
