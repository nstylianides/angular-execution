'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
      console.log('myApp.view2 config');
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.run(function(){
        console.log('myApp.view2 run');
    })
.controller('View2Ctrl', [function() {
        console.log('myApp.view1 controller');
}]);