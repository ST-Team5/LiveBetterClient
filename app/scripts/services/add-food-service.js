'use strict';

angular.module('lbClientApp')
.service('AddFoodService', function($http, SERVER_ADDRESS) {
	function constructParameters(name, calories, carbohydrates, fats, proteins) {
		return {
			name: name,
			fat: fats,
			calories: calories,
			carbohydrates: carbohydrates,
			proteins: proteins
		};
	}
	this.addFood = function(name, calories, carbohydrates, fats, proteins) {
		var parameters = constructParameters(name, calories, carbohydrates, fats, proteins);
		$http({
			method: 'POST',
			url: SERVER_ADDRESS + 'mealses',
			contentType: 'application/json',
			data: JSON.stringify(parameters)
		}).success(function(data) {
			console.log(data);
		}).
		error(function(data) {
			console.log(data);
		});
	};

	this.addBeverage = function(name, calories, carbohydrates, fats, proteins) {
		var parameters = constructParameters(name, calories, carbohydrates, fats, proteins);
		$http({
			method: 'POST',
			url: SERVER_ADDRESS + 'drinks',
			contentType: 'application/json',
			data: JSON.stringify(parameters)
		}).success(function(data) {
			console.log(data);
		}).
		error(function(data) {
			console.log(data);
		});
	};
});
