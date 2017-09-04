var app = angular.module('app', []);
app.controller('WelcomeCtrl', function ($scope, $http) {
    $scope.selected = 'list';
    $scope.changeTab = function (selected) {
        $scope.selected = selected;
    }
});

app.controller('MainCtrl', function ($scope) {

});
