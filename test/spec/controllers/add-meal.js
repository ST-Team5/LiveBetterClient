'use strict';

describe('Controller: AddMealCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var AddMealCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddMealCtrl = $controller('AddMealCtrl', {
      $scope: scope
    });
  }));

  it('bar', function () {
  });
});
