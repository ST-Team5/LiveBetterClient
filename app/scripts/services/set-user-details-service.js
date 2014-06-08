'use strict';

angular.module('lbClientApp')
  .service('SetUserDetailsService', function ($http, SERVER_ADDRESS) {
    this.setUserDetails = function (firstName, middleName, lastName,bornDate, height, weight) {

      var personToSetDetails = {
        firstname: firstName,
        middlename: middleName,
        lastname: lastName,
        dateOfBirth: new Date(bornDate),
        height: height,
        weight: weight
      };

      $http({
        method: 'POST',
        url: SERVER_ADDRESS + 'persons/setdetails',
        contentType: 'application/json',
        data: JSON.stringify(personToSetDetails)
      }).
        success(function (data) {
          console.log(status, data);
        }).
        error(function (data) {
          console.log(data);
        });
    };
  });
