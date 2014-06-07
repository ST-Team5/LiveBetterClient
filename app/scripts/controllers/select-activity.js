'use strict';

angular.module('lbClientApp')
  .controller('SelectActivityCtrl', function ($scope, $controller, GetActivitiesServiceData) {
    angular.extend(this, $controller('BaseSelectCtrl', {$scope: $scope}));

    this.initialize(GetActivitiesServiceData);

    this.send = function () {
      console.log('send activity!');
    };
  });