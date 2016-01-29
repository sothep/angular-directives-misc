var app = angular.module('directiveApp', []);

app.controller('dirController', ['$scope', function($scope){
  $scope.count = 0;
  $scope.rocket = false;
  $scope.open = false;

  $scope.addCount = function(){
    $scope.count++;
  }

  $scope.lowerCount = function(){
    $scope.count--;
    $scope.rocket = false;
  }
}]);
