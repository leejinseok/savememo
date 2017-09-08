var app = angular.module('app', []);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('WelcomeCtrl', function ($scope, $http, $httpParamSerializer) {
    $scope.submit = function () {
        var email = this.email;
        var pwd = this.pwd;
        if (validCheckEmail(email)) {
            $http({
                method: 'POST' ,
                url: 'http://localhost:3000/api/v1.0/auth/login/local',
                data: $httpParamSerializer({email: email, pwd: pwd}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function(response) {
                console.log(response.data);
            }).finally(function() {
                console.log('Complete');
            });
        }
    };

});

app.controller('SignupCtrl', function ($scope, $http, $httpParamSerializer) {
    // function twinCkEmail (email) {
    //     $http({
    //         method: 'POST' ,
    //         url: 'http://localhost:3000/api/v1.0/auth/twinck/email',
    //         data: $httpParamSerializer({email: email}),
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         }
    //     }).then(function(response) {
    //         console.log(response.data);
    //     }).finally(function() {
    //         console.log('Complete');
    //     });
    // }
});

app.controller('MainCtrl', function ($scope) {
    $scope.selected = 'list';
    $scope.changeTab = function (selected) {
        $scope.selected = selected;
    }
});
