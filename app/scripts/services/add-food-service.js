'use strict';

angular.module('lbClientApp')
  .service('AddFoodService', function ($http, SERVER_ADDRESS) {
    function constructParameters(name, calories, carbohydrates, fats, proteins) {
      return {
        name: name,
        fat: fats,
        calories: calories,
        carbohydrates: carbohydrates,
        proteins: proteins,
        type: 'foo'
      };
    }

    this.addFood = function (name, calories, carbohydrates, fats, proteins, successHandler) {
      var parameters = constructParameters(name, calories, carbohydrates, fats, proteins);
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'meals/insert',
        contentType: 'application/json',
        data: JSON.stringify(parameters)
      }).success(function (data) {
        console.log(data);
        successHandler.call();
      }).
        error(function (data) {
          console.log(data);
        });
    };

    this.addBeverage = function (name, calories, carbohydrates, fats, proteins, successHandler) {
      var parameters = constructParameters(name, calories, carbohydrates, fats, proteins);
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'drinks/insert',
        contentType: 'application/json',
        data: JSON.stringify(parameters)
      }).success(function (data) {
        console.log(data);
        successHandler.call();
      }).
        error(function (data) {
          console.log(data);
        });
    };
  });
