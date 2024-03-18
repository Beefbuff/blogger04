angular
    .module('blogApp')
    .controller('HomeController', ['$scope',function($scope) {
    $scope.title= "Kyle kalbach's Blog Site";
    $scope.message = "Welcome to Kyle Kalbach's Blog site!";
}]);
HomeController.$inject=[$scope];
