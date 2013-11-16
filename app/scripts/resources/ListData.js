'use strict';

var baseUrl = "https://seriouslists.azure-mobile.net/tables/";

Listit.factory('listItemService', ['$resource', function ($resource) {
    return $resource(baseUrl + "listitems/:id", { id: '@id' },
        {
            "update": { method: "PATCH", isArray: false }
        });
}]);

Listit.factory('listService', ['$resource', function ($resource) {
    return $resource(baseUrl + "lists/:id", { id: '@id' },
        {
            "update": { method: "PATCH", isArray: false }
        });
}]);