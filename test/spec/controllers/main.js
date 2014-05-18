'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lbClientApp'));

  var MainCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
  }));

  it('properly detects the active route', function () {
    location.path('/foo');
    expect(scope.isActive('/foo')).toBeTruthy();
    expect(scope.isActive('/baz')).toBeFalsy();
    location.path('/baz');
    expect(scope.isActive('/foo')).toBeFalsy();
    expect(scope.isActive('/baz')).toBeTruthy();
    location.path('/bar');
    expect(scope.isActive('/foo')).toBeFalsy();
    expect(scope.isActive('/baz')).toBeFalsy();
  });
});
