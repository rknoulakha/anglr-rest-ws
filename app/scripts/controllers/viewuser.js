'use strict';


angular.module('myTestAppApp').controller('ViewUserCtrl', function($scope, $http, $rootScope) {
	$scope.hideMe = true;
	$scope.buttonText = 'Show';
	$scope.viewUserFunc = function() {
		$scope.hideMe = !$scope.hideMe;

		var btnText = $scope.buttonText;
		if (btnText == "Show") {
			$scope.buttonText = 'Hide';
		}

		else {
			$scope.buttonText = 'Show';
		}
		
	var url = ($rootScope.service_url);
		
		$http.get(url).success(function(response) 
		{
				
					$scope.listUsers = response;
		}).error(
				function(data, status, header, config) {
					alert("Error while calling service"+header);
					$scope.ResponseDetails = "Data: " + data + "<hr />status: "
							+ status + "<hr />headers: " + header
							+ "<hr />config: " + config;
				});
	};
});

