'use strict';

Listit.controller('ListItemsCtrl',
    function ($scope, $routeParams, listItemService, listService) {
        var currentList = $routeParams.listId ? $routeParams.listId : null,
            filter = "(listId eq " + currentList + ")";

        if (currentList == null) {
            return;
        }
        
        $scope.items = listItemService.query({ $filter: filter });

        $scope.changedStatus = function (item) {
            listItemService.update({ id: item.id }, item, function () {
                console.log('successfully updated');
            }, function(errorObject) {
                console.log('error updating');
                console.log(errorObject);
            });
        };
        
        $scope.removeItem = function (index) {
            var itemToRemove = $scope.items[index];
            listItemService.remove(itemToRemove);
            $scope.items.splice(index, 1);
        };
        
        $scope.addItem = function () {
            var newItem = { text: $scope.itemText, complete: false, listId: currentList };
            listItemService.save(newItem, function (data) {
                console.log('added new list item');
                $scope.items.push(data);
            });
            $scope.itemText = '';
        };
    }
);
