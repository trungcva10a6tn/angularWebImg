'use strict';

angular.module('myApp.post_img', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/post_img', {
            templateUrl: 'post_img/post_img.html',
            controller: 'Post_imgCtrl'
        });
    }])

    .controller('Post_imgCtrl', [function() {

    }]);