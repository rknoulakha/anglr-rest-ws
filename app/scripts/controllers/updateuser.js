'use strict';


angular.module('myTestAppApp')
  .controller('UpdateUserCtrl', 
  
  
  
function($scope, $http) {
	
	$scope.hideMe = true;	
	$scope.viewSingleUserFunc = function() 
	{
	$scope.hideMe = false;
	var url="http://localhost:8081/Rest_WS_Advanced_Maven/user/";
	url = url + ($scope.id);
	$http.get(url).then(function(response) 
	{
	$scope.name = response.data.name;
	$scope.profession = response.data.profession;
	$scope.doj = response.data.doj;
	$scope.country = response.data.address.country;
	$scope.state = response.data.address.state;
	$scope.city = response.data.address.city;
	$scope.pincode = response.data.address.pincode;
	});
	};
	
	
$scope.updateUserFunc = function() {
		
		var user = {
			"id" : $scope.id,
			"name" : $scope.name,
			"profession" : $scope.profession,
			"address" : {
				"country" : $scope.country,
				"state" : $scope.state,
				"city" : $scope.city,
				"pincode" : $scope.pincode
			}
		};

		var userString = JSON.stringify(user, null, '');
		var config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		}
		var url = 'http://localhost:8081/Rest_WS_Advanced_Maven/user/update/';
		url = url + ($scope.id);
	
		$http.put(url, userString, config).success(
				function(data, status, headers, config) {

					alert('Update Successfully :');
					
	$scope.id='';				
	$scope.name = '';	
	$scope.profession = '';	
	$scope.doj = '';	
	$scope.country = '';	
	$scope.state = '';	
	$scope.city = '';	
	$scope.pincode = '';	
					
					
				}).error(
				function(data, status, header, config) {
					$scope.ServerResponse = htmlDecode("Data: " + data
							+ "\n\n\n\nstatus: " + status + "\n\n\n\nheaders: "
							+ header + "\n\n\n\nconfig: " + config);
				});

	};
}

  
  
  
  
  
  );
