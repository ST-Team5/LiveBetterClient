'use strict';

angular.module('lbClientApp')
  .service('SelectDrinksService', function ($http, SERVER_ADDRESS, CURRENT_USER_ID) {
    this.selectDrinks = function (drinks, successHandler) {
      var drinkData = _.map(drinks, function(drink) {
        return {
          id: drink.id,
          quantity: drink.quantity
        };
      });
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'drinks/' + CURRENT_USER_ID,
        contentType: 'application/json',
        data: JSON.stringify(drinkData)
      }).
        success(function (data) {
          if (successHandler) {
            successHandler.call();
          }
          console.log(status, data);
        }).
        error(function (data) {
          console.log(data);
        });
    };
  });
