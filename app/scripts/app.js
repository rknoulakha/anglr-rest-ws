'use strict';


angular .module('myTestAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
	
    $routeProvider
      
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
	  .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/viewuser', {
        templateUrl: 'views/viewuser.html',
        controller: 'ViewUserCtrl',
        controllerAs: 'viewuser'
      })
      .when('/viewsingleuser', {
        templateUrl: 'views/viewsingleuser.html',
        controller: 'ViewSingleUserCtrl',
        controllerAs: 'viewsingleuser'
      })
      .when('/insertuser', {
        templateUrl: 'views/insertuser.html',
        controller: 'InsertUserCtrl',
        controllerAs: 'insertuser'
      })
       .when('/updateuser', {
        templateUrl: 'views/updateuser.html',
        controller: 'UpdateUserCtrl',
        controllerAs: 'updateuser'
      })
       .when('/deleteuser', {
        templateUrl: 'views/deleteuser.html',
        controller: 'DeleteUserCtrl',
        controllerAs: 'deleteuser'
      })
      .otherwise({
        templateUrl: '404.html',
        controller: 'ErrorCtrl',
        controllerAs: 'error'
      });
  });
