'use strict';
function DisplayHumanCtrl($scope, $http){
	$scope.color = 'red';

	$http.get('humans.json')
	.success(function(humans){
		$scope.humans = humans;
	});

	$scope.dcr = function(h){
		h.age--;
	};
	$scope.inc = function(h){
		h.age++;
	};

	$scope.addHuman = function(n,a){
		$scope.humans.push({name:n,age:a});
	};
}

