'use strict';

liveBetterClient
	.service('addActivityService', function(){
	
	this.getActivities = function () {
		return activities;
	};

	this.insertActivity = function(name, type, calories) {

		console.log(activities);
		var newId = activities.length + 1;

		activities.push({
			id: newId,
			name: name,
			type: type,
			calories: calories
		});
	};

	var activities = [

	];
});
