'use strict'

app.controller("MainController", ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.submitSearch = function(searchTerm) {
    $http.get(`http://www.omdbapi.com/?s=${searchTerm}`).then(function(object) {
      $scope.movies =  object.data.Search
      $location.url('/movies')
    })
    return $scope.movies
  }
}])


app.controller("SecondController", ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  let id = $routeParams.id
  $http.get(`http://www.omdbapi.com/?i=${id}`).then(function(movie){
    $scope.movie = movie.data
  })
}])
