'use strict';

angular.module('lbClientApp')
  .controller('SelectDrinkCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    $scope.recent = [
      {
        name: 'Boza',
        selected: false
      },
      {
        name: 'Sok',
        selected: false
      },
      {
        name: 'Rakia',
        selected: false
      }
    ];
    $scope.all = [
      {
        name: 'Boza',
        selected: false
      },
      {
        name: 'Beer',
        selected: false
      },
      {
        name: 'Rakia',
        selected: false
      },
      {
        name: 'Coffee',
        selected: false
      }
    ];

    $scope.frequent = [
      {
        name: 'Boza',
        selected: false
      },
      {
        name: 'Sok',
        selected: false
      }
    ];

    $scope.send = function () {
      console.log('send drink!');
    };
  });
