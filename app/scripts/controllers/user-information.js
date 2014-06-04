'use strict';

angular.module('lbClientApp')
  .controller('UserInfomationCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
    
    $scope.personAge = '';
    $scope.personHeight = '';
    $scope.personWeight = '';
    $scope.personMetabolism = '';
});