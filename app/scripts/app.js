'use strict';

var Listit = angular.module('ListItApp', ['ngResource'])
    .config(function($httpProvider) {
        $httpProvider.defaults.headers.common["X-ZUMO-APPLICATION"] = "deHcYguFWpBdJcEQYeiSQSlfZseKjK11";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/lists.html',
                controller: 'ListCtrl'
            })
            .when('/list/:listId', {
                templateUrl: 'views/listitems.html',
                controller: 'ListItemsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
