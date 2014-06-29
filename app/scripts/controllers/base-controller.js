'use strict';

angular.module('lbClientApp')
  .controller('BaseCtrl', function ($scope, $location) {
    $scope.isActive = function (route) {
      return route === $location.path();
    };
    $scope.showSelectionDropdown = function () {
      $('#selectionDropdown').addClass('open');
    };
    $scope.hideSelectionDropdown = function () {
      $('#selectionDropdown').removeClass('open');
    };
  });
