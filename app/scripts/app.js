'use strict';

var shoppingApp = angular.module('ShoppingApp', ['ngResource']);

shoppingApp.config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common["X-ZUMO-APPLICATION"] = "WJhrbQdhhyjgTvxJHjmcjucxnuiyYb54";
   
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'ShoppingListCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
