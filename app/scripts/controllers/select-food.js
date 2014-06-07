'use strict';

angular.module('lbClientApp')
  .controller('SelectFoodCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    $scope.recent = [
      {
        name: 'Musaka',
        selected: false
      },
      {
        name: 'Tarator',
        selected: false
      }
    ];
    $scope.all = [
      {
        name: 'Nutella',
        selected: false
      }
    ];

    $scope.frequent = [
      {
        name: 'Qdki',
        selected: false
      },
      {
        name: 'Chips',
        selected: false
      }
    ];

    $scope.send = function () {
      console.log("send food!");
    };
  });
