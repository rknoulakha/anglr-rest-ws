'use strict';


angular.module('myTestAppApp')
  .controller('DeleteUserCtrl', 
  
  
  
  
  
 function($scope, $http) {
	$scope.deleteUserFunc = function() {
		var url = 'http://localhost:8081/Rest_WS_Advanced_Maven/user/delete/';
		url = url + ($scope.id);
		
		// Eclipse thinks delete and instanceof are bug that's why we are having red error symbol in js and alert is not display after delete.
		
		$http.delete(url).success(
				function(data, status, headers, config) {
					alert('Deleted Successfully :');
					
					
						$scope.id='';
					
					
				}).error(
				function(data, status, header, config) {
					$scope.ServerResponse = htmlDecode("Data: " + data
							+ "\n\n\n\nstatus: " + status + "\n\n\n\nheaders: "
							+ header + "\n\n\n\nconfig: " + config);
				});
		
		
		
		
		
		
	};
}

  
  
  
  
  );
