'use strict';

angular.module('lbClientApp')
  .controller('BaseSelectCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {
      $scope: $scope
    }));

    this.initialize = function (data) {
      function transform(rawItem) {
        var result = {
          selected: false,
          data: rawItem,
          quantity: $scope.defaultQuantity
        };
        return result;
      }

      $scope.all = _.map(data.all, transform);
      $scope.recent = _.map(data.recent, transform);
      $scope.frequent = _.map(data.frequent, transform);
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

    $scope.removeSelection = function () {
      function process(item) {
        item.selected = false;
      }

      _.each($scope.all, process);
      _.each($scope.frequent, process);
      _.each($scope.recent, process);
    };

    $scope.doneButtonHandler = function () {
      $scope.send(
        _.chain($scope.selectedProvider)
          .filter(function (item) {
            return item.selected;
          })
          .map(function (item) {
            var data = _.clone(item.data);
            data.quantity = item.quantity / $scope.defaultQuantity;
            return data;
          })
          .value());
    };

    $scope.$watch('selectedProvider', $scope.invalidateInput());
  });