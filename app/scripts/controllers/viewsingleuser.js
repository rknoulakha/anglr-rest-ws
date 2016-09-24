'use strict';


angular.module('myTestAppApp')
  .controller('ViewSingleUserCtrl', 
  
  
function($scope, $http) {
$scope.hideMe = true;
	
$scope.viewSingleUserFunc = function() 
{
$scope.hideMe = false;
var url="http://localhost:8081/Rest_WS_Advanced_Maven/user/";
url = url + ($scope.id);

$http.get(url).then(function(response) 
{
$scope.userdata = response.data;
});
};


}
  

  
  
  );
