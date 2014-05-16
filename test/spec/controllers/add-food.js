'use strict';

describe('Controller: AddFoodCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var AddFoodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddFoodCtrl = $controller('AddFoodCtrl', {
      $scope: scope
    });
  }));

  it('foo', function () {
  });
});
