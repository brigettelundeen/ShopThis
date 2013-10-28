'use strict';

Listit.controller('ListCtrl',
    function ($scope, listData) {
        $scope.lists = listData.query();

        $scope.removeList = function (item) {
            listData.remove(item);
            
            $scope.lists = listData.query();
        };
        
        $scope.addList = function () {
            var newItem = { name: $scope.listName, description: $scope.listDescription };
            listData.add(newItem);
            $scope.lists = listData.query();
            $scope.listName = '';
            $scope.listDescription = '';
        };
    }
);
