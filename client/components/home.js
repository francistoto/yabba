angular.module('angular-sandbox.home', [])

.controller('HomeController', function($scope) {
  $scope.name = 'Frank';
  $scope.description = 'Angular Sandbox';

  $scope.changeName = (name) => {
    $scope.name = name;
  };

  $scope.changeDescription = (description) => {
    $scope.description = description;
  };
});
