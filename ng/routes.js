var app = angular.module('app');
app.config(['$routeProvider',function($routeProvider){

  $routeProvider
  .when('/', {templateUrl : '/private/templates/index.html', controller : 'indexCtrl', controllerAs: 'index'})
  .when('/register',{ templateUrl : '/private/templates/register.html', controller : 'RegisterCtrl', controllerAs: 'register'})
  .when('/login',{templateUrl : '/private/templates/login.html', controller : 'LoginCtrl', controllerAs: 'login'})
  .when('/input',{templateUrl : '/private/templates/input.html', controller: 'inputCtrl', controllerAs: 'input'})
  .when('/lease',{templateUrl : '/private/templates/lease.html', controller: 'leaseCtrl', controllerAs: 'lease'})
  .when('/sale',{templateUrl : '/private/templates/sale.html', controller: 'saleCtrl', controllerAs: 'sale'})
  .when('/search',{templateUrl : '/private/templates/search.html', controller: 'ListCtrl', controllerAs: 'list'})
  .when('/leaseDetail',{templateUrl : '/private/templates/leaseDetail.html', controller: 'LeaseDetailCtrl', controllerAs: 'leaseDetail'})
  .when('/saleDetail',{templateUrl : '/private/templates/saleDetail.html', controller: 'SaleDetailCtrl', controllerAs: 'saleDetail'})
  .when('/alarm',{templateUrl : '/private/templates/alarm.html', controller: 'AlarmCtrl', controllerAs: 'alarm'})
  .otherwise({redirectTo: '/'});

}]);
