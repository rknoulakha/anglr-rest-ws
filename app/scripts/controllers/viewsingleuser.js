'use strict';


angular.module('myTestAppApp')
  .controller('ViewSingleUserCtrl', 
  
  
function($scope, $http, $rootScope) {
$scope.hideMe = true;
	
$scope.viewSingleUserFunc = function() 
{
$scope.hideMe = false;
var url = ($rootScope.service_url)+'/'+($scope.id);
$http.get(url).then(function(response) 
{
$scope.userdata = response.data;
});
};


}
  

  
  
  );
