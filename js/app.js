'use strict'

const app = angular.module("movieApp", ['ngRoute'])

//route
app.config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: './views/movies.html',
            controller: 'MainController'
        })
        .when('/movie/:id', {
            templateUrl: './views/movie.html',
            controller: 'SecondController'
        })
})
