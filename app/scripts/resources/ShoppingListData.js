'use strict';

shoppingApp.factory('shoppingListData', ['$resource', function ($resource) {
    var baseUrl = "https://workoutlogger.azure-mobile.net/tables/todoitem/:id";
    return $resource(baseUrl,
        { id: '@id' },
        {
            query: { method: 'GET', isArray: true },
            remove: { method: 'DELETE' },
            add: { method: 'POST' },
            edit: { method: 'PATCH' }
        });
}]);