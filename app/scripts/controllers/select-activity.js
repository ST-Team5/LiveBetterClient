'use strict';

angular.module('lbClientApp')
  .controller('SelectActivityCtrl', function ($scope) {
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
    $scope.all = [];
    $scope.frequent = [];

    $scope.frequentSelected = function () {
      $scope.selectedProvider = $scope.frequent;
    };

    $scope.recentSelected = function () {
      $scope.selectedProvider = $scope.recent;
    };

    $scope.allSelected = function () {
      $scope.selectedProvider = $scope.all;
    };

    $scope.isInputValid = function () {
      var provider = $scope.selectedProvider;
      for (var i = 0; i < provider.length; i++) {
        if (provider[i].selected) {
          return true;
        }
      }
      return false;
    };
  });