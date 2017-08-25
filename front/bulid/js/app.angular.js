var app = angular.module('app', []);
app.controller('WelcomeCtrl', function ($scope, $http) {
    $scope.submit = function () {
        console.log(this.email);
        console.log(this.pwd);
    }

    $scope.hi = function () {
        console.log('hi');
    }

    function validCheckEmail () {

    }
});
