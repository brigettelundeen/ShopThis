'use strict';

shoppingApp.controller('ShoppingListCtrl',
    function ($scope, shoppingListData) {
        $scope.shoppingItems = shoppingListData.query();

        $scope.removeItem = function(item) {
            shoppingListData.remove(item);
            
            $scope.shoppingItems = shoppingListData.query();
        };
        
        $scope.addItem = function () {
            var newItem = { text: $scope.itemText, complete: false };
            shoppingListData.add(newItem);
            $scope.shoppingItems = shoppingListData.query();
            $scope.itemText = '';
        };
    }
);
