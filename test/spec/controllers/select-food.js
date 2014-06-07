'use strict';

describe('Controller: SelectFoodCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var SelectFoodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectFoodCtrl = $controller('SelectFoodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
