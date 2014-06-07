'use strict';

describe('Controller: SelectDrinkCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var SelectDrinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectDrinkCtrl = $controller('SelectDrinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
