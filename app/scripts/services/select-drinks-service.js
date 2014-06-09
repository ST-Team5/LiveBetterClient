'use strict';

angular.module('lbClientApp')
  .service('SelectDrinksService', function ($http, SERVER_ADDRESS, CURRENT_USER_ID, successHandler) {
    this.selectDrinks = function (drinks) {
      var drinksIds = _.map(drinks, function(drink) {
        return drink.id;
      });
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'drinks/' + CURRENT_USER_ID,
        contentType: 'application/json',
        data: JSON.stringify(drinksIds)
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
