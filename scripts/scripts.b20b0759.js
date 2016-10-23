"use strict";angular.module("myTestAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/viewuser",{templateUrl:"views/viewuser.html",controller:"ViewUserCtrl",controllerAs:"viewuser"}).when("/viewsingleuser",{templateUrl:"views/viewsingleuser.html",controller:"ViewSingleUserCtrl",controllerAs:"viewsingleuser"}).when("/insertuser",{templateUrl:"views/insertuser.html",controller:"InsertUserCtrl",controllerAs:"insertuser"}).when("/updateuser",{templateUrl:"views/updateuser.html",controller:"UpdateUserCtrl",controllerAs:"updateuser"}).when("/deleteuser",{templateUrl:"views/deleteuser.html",controller:"DeleteUserCtrl",controllerAs:"deleteuser"}).otherwise({templateUrl:"404.html",controller:"ErrorCtrl",controllerAs:"error"})}]),angular.module("myTestAppApp").controller("ConstCtrl",["$scope","$rootScope",function(a,b){b.service_url="https://rest-ws-deploy-heroku.herokuapp.com/user"}]),angular.module("myTestAppApp").controller("HomeCtrl",["$scope","$rootScope",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myTestAppApp").controller("ErrorCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("myTestAppApp").controller("ViewUserCtrl",["$scope","$http","$rootScope",function(a,b,c){a.hideMe=!0,a.buttonText="Show",a.viewUserFunc=function(){a.hideMe=!a.hideMe;var d=a.buttonText;"Show"==d?a.buttonText="Hide":a.buttonText="Show";var e=c.service_url;b.get(e).success(function(b){a.listUsers=b}).error(function(b,c,d,e){alert("Error while calling service"+d),a.ResponseDetails="Data: "+b+"<hr />status: "+c+"<hr />headers: "+d+"<hr />config: "+e})}}]),angular.module("myTestAppApp").controller("ViewSingleUserCtrl",["$scope","$http","$rootScope",function(a,b,c){a.hideMe=!0,a.viewSingleUserFunc=function(){a.hideMe=!1;var d=c.service_url+"/"+a.id;b.get(d).then(function(b){a.userdata=b.data})}}]),angular.module("myTestAppApp").controller("InsertUserCtrl",["$scope","$http","$rootScope",function(a,b,c){a.saveUserFunc=function(){var d={name:a.name,profession:a.profession,address:{country:a.country,state:a.state,city:a.city,pincode:a.zipcode}},e=JSON.stringify(d,null,""),f={headers:{"Content-Type":"application/json"}},g=c.service_url+"/insert";b.post(g,e,f).success(function(b,c,d,e){alert("Save Successfully :"),a.id="",a.name="",a.profession="",a.doj="",a.country="",a.state="",a.city="",a.zipcode=""}).error(function(b,c,d,e){alert("Error while calling service"+d),a.ResponseDetails="Data: "+b+"<hr />status: "+c+"<hr />headers: "+d+"<hr />config: "+e})}}]),angular.module("myTestAppApp").controller("UpdateUserCtrl",["$scope","$http","$rootScope",function(a,b,c){a.hideMe=!0,a.viewSingleUserFunc=function(){a.hideMe=!1;var d=c.service_url+"/"+a.id;b.get(d).then(function(b){a.name=b.data.name,a.profession=b.data.profession,a.doj=b.data.doj,a.country=b.data.address.country,a.state=b.data.address.state,a.city=b.data.address.city,a.pincode=b.data.address.pincode})},a.updateUserFunc=function(){var d={id:a.id,name:a.name,profession:a.profession,address:{country:a.country,state:a.state,city:a.city,pincode:a.pincode}},e=JSON.stringify(d,null,""),f={headers:{"Content-Type":"application/json"}},g=c.service_url+"/update/"+a.id;b.put(g,e,f).success(function(b,c,d,e){alert("Update Successfully :"),a.id="",a.name="",a.profession="",a.doj="",a.country="",a.state="",a.city="",a.pincode=""}).error(function(b,c,d,e){a.ServerResponse=htmlDecode("Data: "+b+"\n\n\n\nstatus: "+c+"\n\n\n\nheaders: "+d+"\n\n\n\nconfig: "+e)})}}]),angular.module("myTestAppApp").controller("DeleteUserCtrl",["$scope","$http","$rootScope",function(a,b,c){a.deleteUserFunc=function(){var d=c.service_url+"/delete/"+a.id;b["delete"](d).success(function(b,c,d,e){alert("Deleted Successfully :"),a.id=""}).error(function(b,c,d,e){a.ServerResponse=htmlDecode("Data: "+b+"\n\n\n\nstatus: "+c+"\n\n\n\nheaders: "+d+"\n\n\n\nconfig: "+e)})}}]),angular.module("myTestAppApp").run(["$templateCache",function(a){a.put("views/deleteuser.html",'<div class="jumbotron"> <form> <table class="table"> <tr><td>Id</td><td><input class="form-control" type="text" name="id" ng-model="id"></td></tr> <td><input class="btn btn-default" type="submit" name="submit" value="Submit" ng-click="deleteUserFunc()"></td> <td><input class="btn btn-default" type="reset" name="reset" value="Reset"></td>  </table> </form> </div>'),a.put("views/home.html",'<div class="jumbotron"> <h3>Consuming Restful Webservices Using Angular JS</h3> <div class="container"> <div class="row"> <div class="col-md-4"> <img src="images/anglr.ed540c22.png" class="img-responsive" alt="Responsive image"> </div> <div class="col-md-4"> <img src="images/rest.2842b4b7.png" class="img-responsive" alt="Responsive image"> </div> <div class="col-md-4"> <img src="images/node.6f2085e5.png" class="img-responsive" alt="Responsive image"> </div> </div> </div> </div>'),a.put("views/insertuser.html",'<div class="jumbotron"> <form> <table class="table"> <tr><td>Name</td><td><input class="form-control" type="text" name="name" ng-model="name"></td></tr> <tr><td>Profession</td><td><input class="form-control" type="text" name="profession" ng-model="profession"></td></tr> <tr><td>Country</td><td><input class="form-control" type="text" name="country" ng-model="country"></td></tr> <tr><td>State</td><td><input class="form-control" type="text" name="state" ng-model="state"></td></tr> <tr><td>City</td><td><input class="form-control" type="text" name="city" ng-model="city"></td></tr> <tr><td>Zip Code</td><td><input class="form-control" type="text" name="zipcode" ng-model="zipcode"></td></tr> <tr> <td><input class="btn btn-default" type="submit" name="submit" value="Submit" ng-click="saveUserFunc()"></td> <td><input class="btn btn-default" type="reset" name="reset" value="Reset"></td> </tr> </table> </form> </div>'),a.put("views/updateuser.html",'<div class="jumbotron"> <table class="table"> <tr> <td>Id</td> <td><input class="form-control" type="text" name="id" ng-model="id"></td> <td><button class="btn btn-default" ng-click="viewSingleUserFunc()">Search User</button></td> </tr> </table> <div ng-hide="hideMe"> <table class="table"> <tr><td>Name</td><td><input class="form-control" type="text" name="name" ng-model="name" ng-value="myName"></td></tr> <tr><td>Profession</td><td><input class="form-control" type="text" name="profession" ng-model="profession" ng-value="myProfession"></td></tr> <tr><td>DOJ</td><td><input class="form-control" type="text" name="doj" ng-model="doj" ng-value="mydoj"></td></tr> <tr><td>Country</td><td><input class="form-control" type="text" name="country" ng-model="country" ng-value="myCountry"></td></tr> <tr><td>State</td><td><input class="form-control" type="text" name="state" ng-model="state" ng-value="myState"></td></tr> <tr><td>City</td><td><input class="form-control" type="text" name="city" ng-model="city" ng-value="myCity"></td></tr> <tr><td>Pincode</td><td><input class="form-control" type="text" name="pincode" ng-model="pincode" ng-value="myPincode"></td></tr> <tr><td><button class="btn btn-default" ng-click="updateUserFunc()">Update</button></td><td></td></tr> </table> </div> </div>'),a.put("views/viewsingleuser.html",'<div class="jumbotron"> <table class="table"> <tr> <td>Id</td> <td><input class="form-control" type="text" name="id" ng-model="id"></td> <td><button class="btn btn-default" ng-click="viewSingleUserFunc()">Show User</button></td> </tr> </table> <div ng-hide="hideMe" class="container"> <table class="table"> <thead> <tr> <th>Id</th> <th>Name</th> <th>Profession</th> <th>DOJ</th> <th>Country</th> <th>State</th> <th>City</th> <th>Zip Code</th> </tr> </thead> <tbody> <tr> <td>{{userdata.id}}</td> <td>{{userdata.name}}</td> <td>{{userdata.profession}}</td> <td>{{userdata.doj}}</td> <td>{{userdata.address.country}}</td> <td>{{userdata.address.state}}</td> <td>{{userdata.address.city}}</td> <td>{{userdata.address.pincode}}</td> </tr> </tbody> </table> </div> </div>'),a.put("views/viewuser.html",'<div class="jumbotron"> <button class="btn btn-default" ng-click="viewUserFunc()">{{buttonText}}</button> <div class="container"> <table ng-hide="hideMe" class="table"> <thead> <tr> <th>Id</th> <th>Name</th> <th>Profession</th> <th>DOJ</th> <th>Country</th> <th>State</th> <th>City</th> <th>Zip Code</th> </tr> </thead> <tbody> <tr ng-repeat="pr in listUsers"> <td>{{pr.id}}</td> <td>{{pr.name}}</td> <td>{{pr.profession}}</td> <td>{{pr.doj}}</td> <td>{{pr.address.country}}</td> <td>{{pr.address.state}}</td> <td>{{pr.address.city}}</td> <td>{{pr.address.pincode}}</td> </tr> </tbody> </table> </div> </div>')}]);