'use strict';
angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    })
      .when("/view1",{
          templateUrl: 'post_img/post_img.html',
          controller: 'View1Ctrl'
  });
}])
    .controller('View1Ctrl',function( $scope,$http) {
        if (!angular.isDefined(localStorage.jwt)) {
            localStorage.id="59819822c729f60b18f59c62";
            localStorage.jwt="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIifQ.yPmf5QFV26W-3ldVCrsvRdnecy7QjA0fnCWCDLDZ-M4";
        }
        $scope.likes_post=function (id_post,key) {
            $http({
                method: 'GET',
                url: "http://localhost:3000/likepost/id_post/"+id_post+"/id_user/"+localStorage.id
            }).then(function successCallback(response) {
                $scope.full_post[key].likes=response.data.likes;
            }, function errorCallback(response) {
            })
        };
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