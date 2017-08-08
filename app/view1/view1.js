'use strict';
angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
    .controller('View1Ctrl',function( $scope,$http) {
        if (!angular.isDefined(localStorage.jwt)) {
            localStorage.id="59819822c729f60b18f59c62";
            localStorage.full_name="Nguyễn Bảo Trung";
            localStorage.jwt="sdvdsfdsfbfbvsddsgdfsgdgd";
        }
        $scope.severimg="http://localhost:3000/";
        $scope.all_post=function () {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/'
            }).then(function successCallback(response) {
                $scope.full_post = response.data.post;
            }, function errorCallback(response) {
                $scope.full_post = 'Null';
            })
        };
        $scope.up=function () {
            $scope.trung="---> "+localStorage.user_name.user;
        }

});