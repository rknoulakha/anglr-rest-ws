'use strict';


angular.module('myTestAppApp') .controller('InsertUserCtrl', 
  
  
function($scope, $http, $rootScope) {
	$scope.saveUserFunc = function() {
		var user = {
			"name" : $scope.name,
			"profession" : $scope.profession,
			"address" : {
				"country" : $scope.country,
				"state" : $scope.state,
				"city" : $scope.city,
				"pincode" : $scope.zipcode
			}
		};

		var userString = JSON.stringify(user, null, '');
		
	
		var config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		}
		
		var url = ($rootScope.service_url)+'/insert';
		
$http.post(url, userString,
				config).success(function(data, status, headers, config) {
			alert('Save Successfully :');
			
	$scope.id='';				
	$scope.name = '';	
	$scope.profession = '';	
	$scope.doj = '';	
	$scope.country = '';	
	$scope.state = '';	
	$scope.city = '';	
	$scope.zipcode = '';	
			
		}).error(
				function(data, status, header, config) {
					alert("Error while calling service"+header);
					$scope.ResponseDetails = "Data: " + data + "<hr />status: "
							+ status + "<hr />headers: " + header
							+ "<hr />config: " + config;
				});
	};
}
  
  
  
  );


