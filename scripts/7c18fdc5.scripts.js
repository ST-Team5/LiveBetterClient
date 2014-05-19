"use strict";angular.module("lbClientApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).constant("SERVER_ADDRESS","http://62.44.100.18:8080/lb/").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/add-new-activity-type",{templateUrl:"views/add-new-activity-type.html",controller:"ActivityCtrl"}).when("/add-food",{templateUrl:"views/add-food.html",controller:"AddFoodCtrl"}).when("/add-beverage",{templateUrl:"views/add-beverage.html",controller:"AddFoodCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("lbClientApp").controller("BaseCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("lbClientApp").controller("MainCtrl",["$scope","$controller",function(a,b){angular.extend(this,b("BaseCtrl",{$scope:a}))}]),angular.module("lbClientApp").controller("AddFoodCtrl",["$scope","$controller","AddFoodService",function(a,b,c){angular.extend(this,b("BaseCtrl",{$scope:a})),a.item={type:"food"},a.isFood=function(){return"food"===a.item.type},a.isBeverage=function(){return"beverage"===a.item.type},a.selectFood=function(){a.item.type="food"},a.selectBeverage=function(){a.item.type="beverage"},a.quantityLabel=function(){return"food"===a.item.type?"grams":"milliliters"},a.isInputValid=function(){var b=a.item;return b.name&&$.isNumeric(b.calories)&&$.isNumeric(b.fats)&&$.isNumeric(b.carbohydrates)&&$.isNumeric(b.proteins)},a.sendItem=function(){function b(){a.item={type:d.type}}var d=a.item;a.isFood()?c.addFood(d.name,d.calories,d.carbohydrates,d.fats,d.proteins,b):c.addBeverage(d.name,d.calories,d.carbohydrates,d.fats,d.proteins,b)}}]),angular.module("lbClientApp").controller("ActivityCtrl",["$scope","$controller","ActivityService",function(a,b,c){angular.extend(this,b("BaseCtrl",{$scope:a})),a.insertActivity=function(){var b=a.newActivity.name,d=a.newActivity.type,e=a.newActivity.calories;c.insertActivity(b,d,e),a.newActivity.name="",a.newActivity.type="",a.newActivity.calories=""}}]),angular.module("lbClientApp").service("ActivityService",["$http","SERVER_ADDRESS",function(a,b){this.getAllActivities=function(){},this.insertActivity=function(c,d,e){var f={name:c,type:d,caloriesPerHour:e};a({method:"POST",url:b+"activities/insert-new-type",contentType:"application/json",data:JSON.stringify(f)}).success(function(a){console.log(status,a)}).error(function(a){console.log(a)})}}]),angular.module("lbClientApp").service("AddFoodService",["$http","SERVER_ADDRESS",function(a,b){function c(a,b,c,d,e){return{name:a,fat:d,calories:b,carbohydrates:c,proteins:e,type:"foo"}}this.addFood=function(d,e,f,g,h,i){var j=c(d,e,f,g,h);a({method:"POST",url:b+"meals/insert",contentType:"application/json",data:JSON.stringify(j)}).success(function(a){console.log(a),i.call()}).error(function(a){console.log(a)})},this.addBeverage=function(d,e,f,g,h,i){var j=c(d,e,f,g,h);a({method:"POST",url:b+"drinks/insert",contentType:"application/json",data:JSON.stringify(j)}).success(function(a){console.log(a),i.call()}).error(function(a){console.log(a)})}}]);