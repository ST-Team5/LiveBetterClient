'use strict';

angular.module('lbClientApp')
  .service('ActivityService', function ($http, $q ,SERVER_ADDRESS) {

      this.getAllActivities = function () {

      };

      this.insertActivity = function (name, calories) {

          //var activityToInsert = {
          //    name: name,
          //    type: 'TEst231',
          //    caloriesPerHour: '1250'

          //};

          var activityToInsert = {
              name: 'Stoyan123',
              type: 'stoyanTYpe',
              caloriesPerHour: '123'
          };

          $http({
              method: 'POST',
              url: SERVER_ADDRESS + 'activities/insert-new-type',
              contentType: 'application/json',
              data: JSON.stringify(activityToInsert)
          }).
            success(function (data) {
                console.log(status, data);
            }).
            error(function (data) {
                console.log(data);
                handleUserError(data);
            });

          //var promiseArray = [];

          //$http({
          //    method: 'POST',
          //    url: SERVER_ADDRESS + 'activities/insert-new-type',
          //    contentType: 'application/json',
          //    data: angular.copy(JSON.stringify(activityToInsert))
          //}).
          //  success(function (data) {
          //      console.log(status, data);
          //  }).
          //  error(function (data) {
          //      console.log(data);
          //      handleUserError(data);
          //  });


          //angular.forEach(calories, function (value, key) {

          //    activityToInsert.type = key;
          //    activityToInsert.caloriesPerHour = value;

          //    promiseArray.push($http({
          //        method: 'POST',
          //        url: SERVER_ADDRESS + 'activities/insert-new-type',
          //        contentType: 'application/json',
          //        data: angular.copy(JSON.stringify(activityToInsert))
          //    }));

              //$http({
              //    method: 'POST',
              //    url: SERVER_ADDRESS + 'activities/insert-new-type',
              //    contentType: 'application/json',
              //    data: angular.copy(JSON.stringify(activityToInsert))
              //}).
              //  success(function (data) {
              //      console.log(status, data);
              //  }).
              //  error(function (data) {
              //      console.log(data);
              //      handleUserError(data);
              //  });

              
        //  });

          //$q.all(promiseArray).then(function ( data) {
          //    console.log('OK', data);
          //}, function (data) {
          //    console.log('NOT OK', data)
          //}, function (data) {
          //    console.log('FINALY OK', data);
          //});
      };
  });
