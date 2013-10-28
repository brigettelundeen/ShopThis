'use strict';

Listit.controller('ListItemsCtrl',
    function ($scope, $routeParams, getListItemData, listItemData, listData) {
        var currentList = null;
        if ($routeParams.listId) {
            currentList = $routeParams.listId;
        }
        if (currentList == null) {
            return;
        }
        var filter = "(listId eq " + currentList + ")";

        //var list = listData.getList({ $filter: "(id eq " + currentList + ")" });
        //$scope.listName = list;
        
        //$scope.items = getListItemData.query();
        $scope.items = getListItemData.query({ $filter: filter });
        
        $scope.removeItem = function(item) {
            listItemData.remove(item);
            $scope.items = listItemData.query({ $filter: filter });
        };
        
        $scope.addItem = function () {
            var newItem = { text: $scope.itemText, complete: false, listId: currentList };
            listItemData.add(newItem);
            $scope.items = listItemData.query({ $filter: filter });
            $scope.itemText = '';
        };
    }
);
