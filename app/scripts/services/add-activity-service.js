'use strict';

angular.module('lbClientApp')
	.service('ActivityService', function($http) {
	
	var baseServicesURL = 'http://localhost:8080';
	
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
			url: baseServicesURL + '/live-better/activities/insert-new-type',
			contentType: 'application/json',
			data: JSON.stringify(activityToInsert)
		}).
		success(function(data, status, headers, config) {
			console.log(status, data);
		}).
		error(function(data, status, headers, config) {
		
			console.log(data);
		});
	};
});
