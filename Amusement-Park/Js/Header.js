

var app = angular.module('cusApp', []);
app.controller('cusController', function($scope) {
    $scope.Customer = {name: '', pwd: '', cart: ''};
    $scope.showNecess = false;
    $scope.myClick = function() {
        $scope.showNecess = !$scope.showNecess;
    }
});

