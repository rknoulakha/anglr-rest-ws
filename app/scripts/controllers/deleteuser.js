'use strict';


angular.module('myTestAppApp')
  .controller('DeleteUserCtrl', 
  
  
  
  
  
 function($scope, $http,$rootScope) {
	$scope.deleteUserFunc = function() {
		
		
		
		
		var url = ($rootScope.service_url)+'/delete/'+($scope.id);
				
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
