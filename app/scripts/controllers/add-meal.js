'use strict';

angular.module('lbClientApp')
  .controller('AddMealCtrl', function ($scope) {
    $scope.foods = ['Мусака', 'Шкембе', 'Таратор'];
    $scope.meal = {
      food: $scope.foods[0],
      weight: 150
    };
  });
