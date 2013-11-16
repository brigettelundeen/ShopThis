'use strict';

Listit.controller('ListCtrl',
    function ($scope, listService) {
        $scope.lists = listService.query();

        $scope.removeList = function (index) {
            var listToRemove = $scope.lists[index];
            listService.remove(listToRemove);
            $scope.lists.splice(index, 1);
        };
        
        $scope.addList = function () {
            var newList = { name: $scope.listName, description: $scope.listDescription };
            listService.save(newList, function (data) {
                $scope.lists.push(data);
            });
            $scope.listName = '';
            $scope.listDescription = '';
        };
    }
);
