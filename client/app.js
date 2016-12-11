angular.module('angular-sandbox', [
  'angular-sandbox.home',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.run();
