'use strict';

describe('Controller: SelectActivityCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var SelectActivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectActivityCtrl = $controller('SelectActivityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
