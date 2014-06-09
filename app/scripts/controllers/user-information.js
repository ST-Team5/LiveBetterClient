'use strict';

angular.module('lbClientApp')
.controller('UserInfomationCtrl', function ($scope, $controller, $location ,SetUserDetailsService) {
	angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

	$scope.personBornDate = '';
	$scope.personHeight = '';
	$scope.personWeight = '';
	$scope.personMetabolism = 0;
	$scope.personSex = 0;
	$scope.personGoal = 0;
	$scope.personCalories = 0;
	$scope.goalDate = 'mm/dd/yyyy';
	$scope.personGoalKG = 0;
	$scope.personGoalDays = 0;
	$scope.personBornDate = 'mm/dd/yyyy';
	$scope.firstName = '';
	$scope.middleName = '';
	$scope.lastName = '';

	$scope.submitUserDetails = function() {
		SetUserDetailsService.setUserDetails($scope.firstName, $scope.middleName, $scope.lastName, $scope.personBornDate, $scope.personHeight, $scope.personWeight);

		$scope.firstName = '';
		$scope.middleName = '';
		$scope.lastName = '';
		$scope.personBornDate = 'mm/dd/yyyy';
		$scope.personHeight = '';
		$scope.personWeight = '';

		$location.path( '/' );
	};

	$scope.getDaysBetweenGoalAndToday = function(){
		var result = Math.floor((new Date($scope.goalDate) - new Date()) / 86400000) + 1;
		console.log('result', typeof result);
		return result;
	};

	$scope.getYearsBetweenDates = function(){

		var currentDate = new Date();
		var userBornDate = new Date($scope.personBornDate);

		var yearsMilliseconds = Math.abs(currentDate - userBornDate);

		var milliPerYear=1000 * 60 * 60 *24 * 365.26;

		return yearsMilliseconds/milliPerYear;
	};

	$scope.calculateCaloriesPerDay = function() {
		if ($scope.personSex  === 'male') {
			$scope.personCalories = 655 + (9.6 * $scope.personWeight) + (1.8 *  $scope.personHeight) - (4.7 * $scope.getYearsBetweenDates());
			$scope.personCalories = Math.round($scope.personCalories * 100) / 100;
		}
		// male
		if ($scope.personSex  === 'female') {
			$scope.personCalories = 66 + (13.7 * $scope.personWeight) + (5 *  $scope.personHeight) - (6.8 * $scope.getYearsBetweenDates());
			$scope.personCalories = Math.round($scope.personCalories * 100) / 100;
		}


		if ($scope.personGoal  && $scope.personGoalKG && $scope.getDaysBetweenGoalAndToday() > 0) {
			if ($scope.personSex  === 'male') {
				$scope.personCalories = (Math.abs($scope.personGoalKG - $scope.personWeight) * (3500 - $scope.personHeight - 15*$scope.personMetabolism)) / $scope.getDaysBetweenGoalAndToday();
				$scope.personCalories = Math.round($scope.personCalories * 100) / 100;
			}
		// male
			if ($scope.personSex  === 'female') {
				$scope.personCalories = (Math.abs($scope.personGoalKG - $scope.personWeight) * (3000 - $scope.personHeight- 10 * $scope.personMetabolism)) / $scope.getDaysBetweenGoalAndToday();
				$scope.personCalories = Math.round($scope.personCalories * 100) / 100;
			}

		}

		return true;
	};
});
