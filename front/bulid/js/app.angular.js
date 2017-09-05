var app = angular.module('app', []);
app.controller('WelcomeCtrl', function ($scope, $http) {
    $scope.submit = function () {
        var email = this.email;
        var pwd = this.pwd;
        console.log(email);
        if (validCheckEmail(email)) {
            window.location.href = '/main';
        }
    }
});

app.controller('MainCtrl', function ($scope) {
    $scope.selected = 'list';
    $scope.changeTab = function (selected) {
        $scope.selected = selected;
    }
});
