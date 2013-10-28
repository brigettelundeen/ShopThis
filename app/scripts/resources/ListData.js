'use strict';

var baseUrl = "https://seriouslists.azure-mobile.net/tables/";

Listit.factory('listItemData', ['$resource', function ($resource) {
    return $resource(baseUrl + "listitems/:id", { id: '@id' },
        {
            remove: { method: 'DELETE' },
            add: { method: 'POST' }
        });
}]);

Listit.factory('getListItemData', ['$resource', function ($resource) {
    //listitems?$filter=(listId%20eq%20)
    return $resource(baseUrl + "listitems", { },
        {
            query: { method: 'GET', isArray: true }
        });
}]);

Listit.factory('listData', ['$resource', function ($resource) {
    return $resource(baseUrl + "lists/:id", { id: '@id' },
        {
            get: { method: 'GET' },
            query: { method: 'GET', isArray: true },
            remove: { method: 'DELETE' },
            add: { method: 'POST' }
        });
}]);