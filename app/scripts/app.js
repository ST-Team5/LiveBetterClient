'use strict';

angular
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
      .when('/add-meal', {
        templateUrl: 'views/add-meal.html',
        controller: 'AddMealCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
