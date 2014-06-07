'use strict';

angular
.module('lbClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
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
  .when('/select-food', {
      templateUrl: 'views/select-food.html',
      controller: 'SelectFoodCtrl',
      resolve: {
        'GetFoodServiceData': function (GetFoodService) {
          return GetFoodService.getAll();
        }
      }
  })
  .when('/select-drink', {
    templateUrl: 'views/select-drink.html',
    controller: 'SelectDrinkCtrl'
  })
  .when('/select-activity', {
    templateUrl: 'views/select-activity.html',
    controller: 'SelectActivityCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

