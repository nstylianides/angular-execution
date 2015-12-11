'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
      console.log('myApp config');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.run(function(){
      console.log('myApp run');
});
