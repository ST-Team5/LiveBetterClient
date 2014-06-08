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
  .constant('CURRENT_USER_ID', 1)
  .config(function($routeProvider) {
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
      .when('/user-information', {
    	templateUrl: 'views/user-information.html',
   	controller: 'UserInfomationCtrl'
  	})
      .when('/select-food', {
        templateUrl: 'views/select-food.html',
        controller: 'SelectFoodCtrl',
        resolve: {
          'GetFoodServiceData': ['GetFoodService',
            function(GetFoodService) {
              return GetFoodService.getAll();
            }
          ]
        }
      })
      .when('/select-drink', {
        templateUrl: 'views/select-drink.html',
        controller: 'SelectDrinkCtrl',
        resolve: {
          'GetDrinksServiceData': ['GetDrinksService',
            function(GetDrinksService) {
              return GetDrinksService.getAll();
            }
          ]
        }
      })
      .when('/select-activity', {
        templateUrl: 'views/select-activity.html',
        controller: 'SelectActivityCtrl',
        resolve: {
          'GetActivitiesServiceData': ['GetActivitiesService',
            function(GetActivitiesService) {
              return GetActivitiesService.getAll();
            }
          ]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });