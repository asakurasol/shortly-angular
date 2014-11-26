angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $timeout, Links) {

  angular.extend($scope, Links);
  $timeout(function() {
    $scope.getLinks();
  },100);

})
.directive('shortenedLink',function() {
  return {
    restrict: 'EA',
    templateUrl: 'app/links/shortenedLink.html',
    replace: true,
    scope: {
      source: '='
    },
    link: function(scope, ele, atr) {
      // console.log(scope.source);
    }
  }
});
