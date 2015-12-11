'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
      console.log('myApp.view1 config');

      $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
    .run(function(){
        console.log('myApp.view1 run');
    })

.controller('View1Ctrl', [function() {
            console.log('myApp.view1 controller');
    }]);