angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  angular.extend($scope, Links);
  $scope.getLinks();

});
