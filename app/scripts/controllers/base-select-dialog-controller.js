'use strict';

angular.module('lbClientApp')
  .controller('BaseSelectCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

    this.initialize = function (contents) {
      $scope.all = $scope.frequent = $scope.recent = _.map(
        contents,
        function (rawItem) {
          var result = {
            selected: false,
            data: rawItem
          };
          return  result;
        });
    };

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

    $scope.doneButtonHandler = function () {
      $scope.send(
        _.chain($scope.selectedProvider)
          .filter(function (item) {
            return item.selected;
          })
          .map(function (item) {
            return item.data;
          })
          .value());
    };

    $scope.$watch('selectedProvider', $scope.invalidateInput());
  });
