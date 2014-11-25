angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $timeout, Links) {

  angular.extend($scope, Links);
  $timeout(function() {
    $scope.getLinks();
  },100);

});
