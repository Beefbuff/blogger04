var blogApp = angular.module('blogApp',['ngRoute']);

//*** REST Web API functions ***
function getAllBlogs($http){
    return $http.get('/api/blogs');
}

function getBlogById($http,id) {
    return $http.get('/api/blogs/' + id);
}

function updateBlogById($http,id,data) {
    return $http.put('/api/blogs/' + id, data);
}

//*** Controllers ***
blogApp.controller('HomeController', function HomeController() {
    var vm = this;
    vm.pageHeader = {
        title: "Blog App"
    };
    vm.message = "Welcome to Kyle Kalbach's Blog site!";
});

blogApp.controller('ListController', function ListController($http) {
    var vm = this;
    vm.pageHeader = {
        title: "Blog List"
    };

    getAllBlogs($http)
        .then(function successCallBack(response) {
            vm.blogs = response.data;
            vm.message = "Blog data found!";
        },function errorCallBack(response){
            vm.message = "Could not get list of blogs";
        });
});

blogApp.controller('EditController', ['$http','$routeParams','$state',function EditController($http,$routeParams,$state) {
    var vm = this;
    vm.blog ={};
    vm.id = $routeParams.id;
    vm.pageHeader = {
        title: "Blog Edit"
    };

    getBlogById($http,vm.id)
        .then(function successCallBack(response) {
            vm.blog = response.data;
            vm.message ="Blog data found!"
            console.log(vm.blog);
        }),function errorCallBack(response){
            vm.message = "Could not find Blog with id of " + vm.id;
        };
    vm.submit = function(){
        var data = vm.blog;
        data.title = userForm.title.value;
        data.text = userForm.text.value;

    updateBlogById($http,vm.id,data)
        .then(function successCallBack(response){
            vm.message="Blog data updated!";
            $state.go('#/blog-list');
        }),function errorCallBack(response){
            vm.message = "Could not update book given id of " + vm.id + userForm.title.text + " " + userForm.text.text ;
        }
    }
}]);

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