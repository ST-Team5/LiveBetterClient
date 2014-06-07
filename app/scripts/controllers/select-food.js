'use strict';

angular.module('lbClientApp')
  .controller('SelectFoodCtrl', function ($scope, $controller, GetFoodServiceData, SelectFoodsService) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetFoodServiceData);

    $scope.send = function (selectedFoods) {
      SelectFoodsService.selectFoods(selectedFoods);
    };
  });
