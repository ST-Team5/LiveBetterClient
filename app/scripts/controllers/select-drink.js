'use strict';

angular.module('lbClientApp')
  .controller('SelectDrinkCtrl', function ($scope, $controller, GetDrinksServiceData, SelectDrinksService) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetDrinksServiceData);

    $scope.send = function (selectedDrinks) {
      SelectDrinksService.selectDrinks(selectedDrinks, $scope.removeSelection);
    };
  });
