'use strict';

liveBetterClient
		.controller('AddActivityCtrl', function($scope, addActivityService){

	$scope.insertActivity = function(){
		var name = $scope.newActivity.name;
		var type = $scope.newActivity.type;
		var calories = $scope.newActivity.calories;

		addActivityService.insertActivity(name, type, calories);

		$scope.newActivity.name = '';
		$scope.newActivity.type = '';
		$scope.newActivity.calories = '';
	}; 

	$scope.activities = addActivityService.getActivities();
	$scope.stoyan='a';
});