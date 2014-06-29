'use strict';
/* jshint ignore:start */

angular.module('lbClientApp')
  .service('ActivityService', function ($http, $q ,SERVER_ADDRESS) {

      this.getAllActivities = function () {

      };

      this.insertActivity = function (name, calories) {

          var activityToInsert = {
              name: name,
              type: '',
              caloriesPerHour: ''

          };

          var promiseArray = [];

          angular.forEach(calories, function (value, key) {

              activityToInsert.type = key;
              activityToInsert.caloriesPerHour = value;

              promiseArray.push($http({
                  method: 'POST',
                  url: SERVER_ADDRESS + 'activities/insert-new-type',
                  contentType: 'application/json',
                  data: angular.copy(JSON.stringify(activityToInsert))
              }));            
          });

          $q.all(promiseArray).then(function ( data) {
              console.log('OK message: ', data);
          }, function (data) {
              console.log('NOT OK message', data)
          });
      };
  });
