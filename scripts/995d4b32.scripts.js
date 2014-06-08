"use strict";function handleUserError(a){"unauthorized"==a.error?authenticate():"access_denied"==a.error&&window.open("access_denied.html","_self")}function handleError(a,b){b.authorized&&("unauthorized"==a.error?window.open("inactivity.html","_self"):(console.info(a.error),window.open("default_error.html","_self")))}function authenticate(){window.open(SERVER_ADDRESS+"login.jsp","_self")}angular.module("lbClientApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).constant("SERVER_ADDRESS","http://62.44.100.18:8080/lb/").constant("CURRENT_USER_ID",1).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/add-new-activity-type",{templateUrl:"views/add-new-activity-type.html",controller:"ActivityCtrl"}).when("/add-food",{templateUrl:"views/add-food.html",controller:"AddFoodCtrl"}).when("/add-beverage",{templateUrl:"views/add-beverage.html",controller:"AddFoodCtrl"}).when("/select-food",{templateUrl:"views/select-food.html",controller:"SelectFoodCtrl",resolve:{GetFoodServiceData:["GetFoodService",function(a){return a.getAll()}]}}).when("/select-drink",{templateUrl:"views/select-drink.html",controller:"SelectDrinkCtrl",resolve:{GetDrinksServiceData:["GetDrinksService",function(a){return a.getAll()}]}}).when("/select-activity",{templateUrl:"views/select-activity.html",controller:"SelectActivityCtrl",resolve:{GetActivitiesServiceData:["GetActivitiesService",function(a){return a.getAll()}]}}).otherwise({redirectTo:"/"})}]),angular.module("lbClientApp").controller("BaseCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("lbClientApp").controller("BaseSelectCtrl",["$scope","$controller",function(a,b){angular.extend(this,b("BaseCtrl",{$scope:a})),this.initialize=function(b){function c(a){var b={selected:!1,data:a};return b}a.all=_.map(b.all,c),a.recent=_.map(b.recent,c),a.frequent=_.map(b.frequent,c)},a.isInputValid=!1,a.recent=[],a.all=[],a.frequent=[],a.frequentSelected=function(){a.selectedProvider=a.frequent},a.recentSelected=function(){a.selectedProvider=a.recent},a.allSelected=function(){a.selectedProvider=a.all},a.invalidateInput=function(){var b=a.selectedProvider;if(!b)return void(a.isInputValid=!1);for(var c=0;c<b.length;c++)if(b[c].selected)return void(a.isInputValid=!0);a.isInputValid=!1},a.doneButtonHandler=function(){a.send(_.chain(a.selectedProvider).filter(function(a){return a.selected}).map(function(a){return a.data}).value())},a.$watch("selectedProvider",a.invalidateInput())}]),angular.module("lbClientApp").controller("MainCtrl",["$scope","$controller",function(a,b){angular.extend(this,b("BaseCtrl",{$scope:a}))}]),angular.module("lbClientApp").controller("AddFoodCtrl",["$scope","$controller","AddFoodService",function(a,b,c){angular.extend(this,b("BaseCtrl",{$scope:a})),a.item={type:"food"},a.isFood=function(){return"food"===a.item.type},a.isBeverage=function(){return"beverage"===a.item.type},a.selectFood=function(){a.item.type="food"},a.selectBeverage=function(){a.item.type="beverage"},a.quantityLabel=function(){return"food"===a.item.type?"grams":"milliliters"},a.isInputValid=function(){function b(a){return a>=0&&100>=a}var c=a.item,d=parseInt(c.fats),e=parseInt(c.carbohydrates),f=parseInt(c.proteins);return c.name&&$.isNumeric(c.calories)&&$.isNumeric(c.fats)&&b(d)&&$.isNumeric(c.carbohydrates)&&b(e)&&$.isNumeric(c.proteins)&&b(f)&&100>=d+e+f},a.sendItem=function(){function b(){a.item={type:d.type}}var d=a.item;a.isFood()?c.addFood(d.name,d.calories,d.carbohydrates,d.fats,d.proteins,b):c.addBeverage(d.name,d.calories,d.carbohydrates,d.fats,d.proteins,b)}}]),angular.module("lbClientApp").controller("ActivityCtrl",["$scope","$controller","ActivityService",function(a,b,c){angular.extend(this,b("BaseCtrl",{$scope:a})),a.insertActivity=function(){var b=a.newActivity.name,d=a.newActivity.type,e=a.newActivity.calories;c.insertActivity(b,d,e),a.newActivity.name="",a.newActivity.type="",a.newActivity.calories=""}}]),angular.module("lbClientApp").service("GetFoodService",["$http","SERVER_ADDRESS","$q",function(a,b,c){this.getAll=function(){function d(){g>=3&&e.resolve(f)}var e=c.defer(),f={},g=0;return a.get(b+"meals/list").success(function(a){g++,f.all=a,d()}),a.get(b+"meals/list").success(function(a){g++,f.recent=a,d()}),a.get(b+"meals/list").success(function(a){g++,f.frequent=a,d()}),e.promise}}]),angular.module("lbClientApp").service("GetActivitiesService",["$http","SERVER_ADDRESS","$q","CURRENT_USER_ID",function(a,b,c,d){this.getAll=function(){function e(){h>=3&&f.resolve(g)}var f=c.defer(),g={},h=0;return a.get(b+"activities/list").success(function(a){h++,g.all=a,e()}),a.get(b+"activities/list/recent/"+d).success(function(a){h++,g.recent=a,e()}),a.get(b+"activities/list/frequent/"+d).success(function(a){h++,g.frequent=a,e()}),f.promise}}]),angular.module("lbClientApp").service("GetDrinksService",["$http","SERVER_ADDRESS","$q",function(a,b,c){this.getAll=function(){function d(){g>=3&&e.resolve(f)}var e=c.defer(),f={},g=0;return a.get(b+"drinks/list").success(function(a){g++,f.all=a,d()}),a.get(b+"drinks/list").success(function(a){g++,f.recent=a,d()}),a.get(b+"drinks/list").success(function(a){g++,f.frequent=a,d()}),e.promise}}]),angular.module("lbClientApp").service("ActivityService",["$http","SERVER_ADDRESS",function(a,b){this.getAllActivities=function(){},this.insertActivity=function(c,d,e){var f={name:c,type:d,caloriesPerHour:e};a({method:"POST",url:b+"activities/insert-new-type",contentType:"application/json",data:JSON.stringify(f)}).success(function(a){console.log(status,a)}).error(function(a){console.log(a),handleUserError(a)})}}]),angular.module("lbClientApp").service("AddFoodService",["$http","SERVER_ADDRESS",function(a,b){function c(a,b,c,d,e){return{name:a,fat:d,calories:b,carbohydrates:c,proteins:e,type:"foo"}}this.addFood=function(d,e,f,g,h,i){var j=c(d,e,f,g,h);a({method:"POST",url:b+"meals/insert",contentType:"application/json",data:JSON.stringify(j)}).success(function(a){console.log(a),i.call()}).error(function(a){console.log(a),handleUserError(a)})},this.addBeverage=function(d,e,f,g,h,i){var j=c(d,e,f,g,h);a({method:"POST",url:b+"drinks/insert",contentType:"application/json",data:JSON.stringify(j)}).success(function(a){console.log(a),i.call()}).error(function(a){console.log(a),handleUserError(a)})}}]),angular.module("lbClientApp").service("SelectActivitiesService",["$http","SERVER_ADDRESS","CURRENT_USER_ID",function(a,b,c){this.selectActivities=function(d){var e=_.map(d,function(a){return a.id});a({method:"POST",url:b+"activities/"+c,contentType:"application/json",data:JSON.stringify(e)}).success(function(a){console.log(status,a)}).error(function(a){console.log(a)})}}]),angular.module("lbClientApp").service("SelectDrinksService",["$http","SERVER_ADDRESS","CURRENT_USER_ID",function(a,b,c){this.selectDrinks=function(d){var e=_.map(d,function(a){return a.id});a({method:"POST",url:b+"drinks/"+c,contentType:"application/json",data:JSON.stringify(e)}).success(function(a){console.log(status,a)}).error(function(a){console.log(a)})}}]),angular.module("lbClientApp").service("SelectFoodsService",["$http","SERVER_ADDRESS","CURRENT_USER_ID",function(a,b,c){this.selectFoods=function(d){var e=_.map(d,function(a){return a.id});a({method:"POST",url:b+"meals/"+c,contentType:"application/json",data:JSON.stringify(e)}).success(function(a){console.log(status,a)}).error(function(a){console.log(a)})}}]),angular.module("lbClientApp").controller("SelectFoodCtrl",["$scope","$controller","GetFoodServiceData","SelectFoodsService",function(a,b,c,d){angular.extend(this,b("BaseSelectCtrl",{$scope:a})),this.initialize(c),a.send=function(a){d.selectFoods(a)}}]),angular.module("lbClientApp").controller("SelectDrinkCtrl",["$scope","$controller","GetDrinksServiceData","SelectDrinksService",function(a,b,c,d){angular.extend(this,b("BaseSelectCtrl",{$scope:a})),this.initialize(c),a.send=function(a){d.selectDrinks(a)}}]),angular.module("lbClientApp").controller("SelectActivityCtrl",["$scope","$controller","GetActivitiesServiceData","SelectActivitiesService",function(a,b,c,d){angular.extend(this,b("BaseSelectCtrl",{$scope:a})),this.initialize(c),a.send=function(a){d.selectActivities(a)}}]);