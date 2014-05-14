'use strict';

var liveBetterClient = angular
  .module('lbClientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add-activity', {
        templateUrl: 'views/add-activity.html',
        controller: 'AddActivityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
