'use strict';


angular.module('myTestAppApp')
  .controller('ConstCtrl', function ($scope,$rootScope) {
    $rootScope.service_url = 'https://rest-ws-deploy-heroku.herokuapp.com/user'; 
  });
