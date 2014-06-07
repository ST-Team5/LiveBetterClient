'use strict';

angular.module('lbClientApp')
  .controller('SelectActivityCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    $scope.recent = [
      {
        name: 'Cycling',
        selected: false
      },
      {
        name: 'Running',
        selected: false
      },
      {
        name: 'Swimming',
        selected: false
      }
    ];
    $scope.all = [
      {
        name: 'Cycling',
        selected: false
      },
      {
        name: 'Hiking',
        selected: false
      },
      {
        name: 'Swimming',
        selected: false
      },
      {
        name: 'Boxing',
        selected: false
      }
    ];

    $scope.frequent = [
      {
        name: 'Cycling',
        selected: false
      },
      {
        name: 'Running',
        selected: false
      }
    ];

    $scope.send = function () {
      console.log('send activity!');
    };
  });