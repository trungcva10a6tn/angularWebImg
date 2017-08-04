var app= angular.module("mypost",[]);
app.controller("myContr",function ($scope, $http) {
    $scope.severimg="http://localhost:3000/uploads/";
    $scope.all_post=function () {
        $http.get("http://localhost:3000/")
            .then(function(response) {
                $scope.full_post = response.data.post;
                console.log(response.data.post);
            });
    };
});