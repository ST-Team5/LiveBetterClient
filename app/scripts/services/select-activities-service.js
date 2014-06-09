'use strict';

angular.module('lbClientApp')
  .service('SelectActivitiesService', function ($http, SERVER_ADDRESS, CURRENT_USER_ID) {
    this.selectActivities = function (activities, successHandler) {
      var activityIds = _.map(activities, function(activity) {
        return activity.id;
      });
      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'activities/' + CURRENT_USER_ID,
        contentType: 'application/json',
        data: JSON.stringify(activityIds)
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
