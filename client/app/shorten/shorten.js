angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  angular.extend($scope, Links);
})
.directive('shortenDirective',function() {
  return {
    restrict: 'AEC',
    templateUrl: 'app/shorten/shorten.html'
  }
});
