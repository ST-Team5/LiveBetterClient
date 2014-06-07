'use strict';

angular.module('lbClientApp')
  .controller('BaseSelectCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    $scope.isInputValid = false;
    $scope.recent = [];
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

    $scope.invalidateInput = function () {
      var provider = $scope.selectedProvider;
      if (!provider) {
        $scope.isInputValid = false;
        return;
      }
      for (var i = 0; i < provider.length; i++) {
        if (provider[i].selected) {
          $scope.isInputValid = true;
          return;
        }
      }
      $scope.isInputValid = false;
    };

    $scope.$watch('selectedProvider', $scope.invalidateInput());
  });
