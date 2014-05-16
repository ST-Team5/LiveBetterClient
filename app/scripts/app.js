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
      .when('/add-food', {
        templateUrl: 'views/add-food.html',
        controller: 'AddFoodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
