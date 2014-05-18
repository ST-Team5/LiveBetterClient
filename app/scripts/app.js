'use strict';

angular
.module('lbClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.constant('SERVER_ADDRESS', 'http://62.44.100.18:8080/lb/')
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
  .when('/add-beverage', {
    templateUrl: 'views/add-beverage.html',
    controller: 'AddFoodCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
