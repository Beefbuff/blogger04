var blogApp = angular.module('blogApp',['ngRoute']);

//*** Controllers ***
blogApp.controller('HomeController', function HomeController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog App"
    };
    vm.message = "Welcome to Kyle Kalbach's Blog site!";
});

blogApp.controller('ListController', function ListController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog List"
    };
    vm.message = "List page under construction"

});

blogApp.controller('EditController', function EditController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog Edit"
    };
    vm.message = "Edit page is under construction"
});

blogApp.controller('DeleteController', function EditController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog Delete"
    };
    vm.message = "Delete page under construction"
});

blogApp.controller('AddController', function AddController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog Add"
    };
    vm.message = "Blog add under construction"
});

//*** Router Provider ***
blogApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
            })
  
        .when('/blog-list', {
            templateUrl: 'pages/blog-list.html',
            controller : 'ListController',
            controllerAs: 'vm'
            })
  
        .when('/blog-add', {
            templateUrl: 'pages/blogAdd.html',
            controller: 'AddController',
            controllerAs: 'vm'
            })
            
        .when('/blog-edit/:id', {
            templateUrl: 'pages/blogEdit.html',
            controller: 'EditController',
            controllerAs: 'vm'
            })
        .when('/blog-delete/:id', {
                templateUrl: 'pages/blogDelete.html',
                controller: 'DeleteController',
                controllerAs: 'vm'
                })
  
        .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
      });
    angular
        .module('blogApp')
        .config(['$routeProvider','$locationProvider', blogApp.config]);