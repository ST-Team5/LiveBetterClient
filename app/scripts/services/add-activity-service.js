'use strict';

angular.module('lbClientApp')
	.service('ActivityService', function($http, SERVER_ADDRESS) {
		
	this.getAllActivities = function () {
		
	};

	this.insertActivity = function(name, type, calories) {

		var activityToInsert = {
			name: name,
			type: type,
			caloriesPerHour: calories
		};
		
		$http({
			method: 'POST',
			url: SERVER_ADDRESS + 'activities/insert-new-type',
			contentType: 'application/json',
			data: JSON.stringify(activityToInsert)
		}).
		success(function(data) {
			console.log(status, data);
		}).
		error(function(data) {
		
			console.log(data);
		});
	};
});
