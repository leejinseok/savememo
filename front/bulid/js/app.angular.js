var app = angular.module('app', []);
app.controller('WelcomeCtrl', function ($scope, $http) {
    $scope.submit = function () {
        var email = this.email;
        var pwd = this.pwd;
        if (validCheckEmail(email)) {
            window.location.href = '/main';
        }
    };
});

app.controller('MainCtrl', function ($scope) {
    
});
