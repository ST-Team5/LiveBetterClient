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

  it('returns the proper quantity label for foods', function () {
    scope.item = {
      type: 'food'
    };
    expect(scope.quantityLabel()).toBe('grams');
  });

  it('returns the proper quantity label for beverages', function () {
    scope.item = {
      type: 'beverage'
    };
    expect(scope.quantityLabel()).toBe('milliliters');
  });

  it('properly detects a food item', function () {
    scope.item = {
      type: 'food'
    };
    expect(scope.isFood()).toBeTruthy();
    expect(scope.isBeverage()).toBeFalsy();
  });

  it('properly detects a beverage item', function () {
    scope.item = {
      type: 'beverage'
    };
    expect(scope.isFood()).toBeFalsy();
    expect(scope.isBeverage()).toBeTruthy();
  });

  it('properly select a food item', function () {
    scope.item = {
      type: 'beverage'
    };
    expect(scope.isFood()).toBeFalsy();
    expect(scope.isBeverage()).toBeTruthy();
    scope.selectFood();
    expect(scope.isFood()).toBeTruthy();
    expect(scope.isBeverage()).toBeFalsy();
  });

  it('properly select a beverage item', function () {
    scope.item = {
      type: 'food'
    };
    expect(scope.isFood()).toBeTruthy();
    expect(scope.isBeverage()).toBeFalsy();
    scope.selectBeverage();
    expect(scope.isFood()).toBeFalsy();
    expect(scope.isBeverage()).toBeTruthy();
  });
});
