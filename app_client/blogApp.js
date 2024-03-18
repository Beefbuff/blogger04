var blogApp = angular.module('blogApp',['ngRoute']);

//*** Router Provider ***
blogApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
            })
  
        .when('/blog-list', {
            templateUrl: 'pages/list/blog-list.html',
            controller : 'ListController',
            controllerAs: 'vm'
            })
  
        .when('/blog-add', {
            templateUrl: 'pages/add/blogAdd.html',
            controller: 'AddController',
            controllerAs: 'vm'
            })
            
        .when('/blog-edit/:id', {
            templateUrl: 'pages/edit/blogEdit.html',
            controller: 'EditController',
            controllerAs: 'vm'
            })
        .when('/blog-delete/:id', {
                templateUrl: 'pages/delete/blogDelete.html',
                controller: 'DeleteController',
                controllerAs: 'vm'
                })
  
        .otherwise({redirectTo: '/'});
      });
    angular
        .module('blogApp')
        .config(['$routeProvider', app.config]);