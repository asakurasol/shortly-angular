angular.module('shortly.services', [])

.factory('Links', function($http, $timeout, Auth) {

  var link = {
    url: ''
  };
  var data = {
    links: []
  };
  var addLink = function() {

    console.log(Auth.isAuth())
    if (Auth.isAuth()) {
      $http.post('/api/links', link)
        .then(function(res) {
        });
      } // else, route to signin page
  };
  var getLinks = function() {
    data.links = [];

    $http.get('/api/links')
      .then(function(res) {
        res.data.forEach(function(link, idx) {

          console.log(link)

          $timeout(function() {
            data.links.push(link);
          }, idx * 175)
        });
        // data.links = res.data;
      });
  };

  return {
    link: link,
    data: data,
    addLink: addLink,
    getLinks: getLinks
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
