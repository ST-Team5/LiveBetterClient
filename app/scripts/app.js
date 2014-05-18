'use strict';

angular.module('lbClientApp', [
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
      .when('/add-new-activity-type', {
        templateUrl: 'views/add-new-activity-type.html',
        controller: 'ActivityCtrl'
      })
      .when('/add-food', {
        templateUrl: 'views/add-food.html',
        controller: 'AddFoodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
