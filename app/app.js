
//'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.view1',
  'myApp.version',
    'angularFileUpload'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('key');
  $routeProvider.otherwise({redirectTo: '/post'});
}]);
