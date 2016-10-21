'use strict';


angular.module('myTestAppApp')
  .controller('ConstCtrl', function ($scope,$rootScope) {
    $rootScope.service_url = 'http://localhost:8081/rest_ws_deploy/user'; 
  });
