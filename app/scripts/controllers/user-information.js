'use strict';

angular.module('lbClientApp')
.controller('UserInfomationCtrl', function ($scope, $controller) {
	angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

	$scope.personAge = '';
	$scope.personHeight = '';
	$scope.personWeight = '';
	$scope.personMetabolism = 0;
	$scope.personSex = 0;
	$scope.personGoal = 0;
	$scope.personCalories = 0;

	$scope.personGoalKG = 0;
	$scope.personGoalDays = 0;

	$scope.calculateCaloriesPerDay = function() {

		if ($scope.personSex  == 1) {
			$scope.personCalories = 655 + (9.6 * $scope.personWeight) + (1.8 *  $scope.personHeight) - (4.7 * $scope.personAge);
		}
	    	// male
	    if ($scope.personSex  == 2) {
	    	$scope.personCalories = 66 + (13.7 * $scope.personWeight) + (5 *  $scope.personHeight) - (6.8 * $scope.personAge);
	    }	


	    if ($scope.personGoal == 1 && $scope.personGoalKG && $scope.personGoalDays) {
	    	if ($scope.personSex  == 1) {
	    		$scope.personCalories = (655 + (9.6 * $scope.personWeight) + (1.8 *  $scope.personHeight) - (4.7 * $scope.personAge) * $scope.personMetabolism); // * Math.abs($scope.personWeight - $scope.personGoalKG)) / $scope.personGoalDays;
	    	}
	    	// male
	    	if ($scope.personSex  == 2) {
	    		$scope.personCalories = (66 + (13.7 * $scope.personWeight) + (5 *  $scope.personHeight) - (6.8 * $scope.personAge) * $scope.personMetabolism); //* Math.abs($scope.personWeight - $scope.personGoalKG)) / $scope.personGoalDays;
	    	}	

	    }

	    if ($scope.personGoal == 2 && $scope.personGoalKG && $scope.personGoalDays) {
	    	if ($scope.personSex  == 1) {
	    		$scope.personCalories = (655 + (9.6 * $scope.personWeight) + (1.8 *  $scope.personHeight) - (4.7 * $scope.personAge) * $scope.personMetabolism); //* Math.abs($scope.personWeight - $scope.personGoalKG)) / $scope.personGoalDays;
	    	}
	    	// male
	    	if ($scope.personSex  == 2) {
	    		$scope.personCalories = (66 + (13.7 * $scope.personWeight) + (5 *  $scope.personHeight) - (6.8 * $scope.personAge) * $scope.personMetabolism); //* Math.abs($scope.personWeight - $scope.personGoalKG)) / $scope.personGoalDays;
	    	}
	    }
	

	return true;
}	
$scope.getMetabolismCoef = function() {
	console.log($scope.personMetabolism);
	if ($scope.personMetabolism == 1) {
		return 1.2;
	}

	if ($scope.personMetabolism == 3) {
		return 1.5;
	}

	if ($scope.personMetabolism == 2) {
		return 1.7;
	}

	return 1;
}});