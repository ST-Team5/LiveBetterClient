'use strict';

angular.module('lbClientApp')
  .service('SelectFoodsService', function ($http, SERVER_ADDRESS, CURRENT_USER_ID) {
    this.selectFoods = function (foods, successHandler) {
      var foodIds = _.map(foods, function(food) {
        return food.id;
      });
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'meals/' + CURRENT_USER_ID,
        contentType: 'application/json',
        data: JSON.stringify(foodIds)
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
