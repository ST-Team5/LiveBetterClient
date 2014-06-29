'use strict';

angular.module('lbClientApp')
  .service('SelectActivitiesService', function ($http, SERVER_ADDRESS, CURRENT_USER_ID) {
    this.selectActivities = function (activities, successHandler) {
      var activityData = _.map(activities, function(activity) {
        return {
          id: activity.id,
          quantity: activity.quantity
        };
      });
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'activities/' + CURRENT_USER_ID,
        contentType: 'application/json',
        data: JSON.stringify(activityData)
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
