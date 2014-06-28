'use strict';
/* jshint ignore:start */

angular.module('lbClientApp')
.controller('StatCtrl', function ($scope, $controller, $http, $rootScope, SERVER_ADDRESS) {
  angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

	var cases = [{id:'dayli', name:'Daily Statistics', num:'1'},
	             {id:'weekly', name:'Weekly Statistics', num:'2'},
	             {id:'mothly', name:'Mothly Statistics', num:'3'},
				 {id:'yearly', name:'Yearly Statistics', num:'4'},
	             ];
	$scope.cases = cases;
	$scope.current_case = cases[0];
	
	$scope.dailyPressed = function(){
		$scope.current_case = cases[0];
	};
	
	$scope.weeklyPressed = function(){
		$scope.current_case = cases[1];
	};
	
	$scope.mothlyPressed = function(){
		$scope.current_case = cases[2];
	};
	
	$scope.yearlyPressed = function(){
		$scope.current_case = cases[3];
	};
});
