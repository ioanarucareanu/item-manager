'use strict';

(function () {

// Register `itemsList` component, along with its associated controller and template
    angular.module('itemsList').controller('ItemsListController', ['$log', '$scope', 'ItemsService', 'ModalService', ItemsListController]);

    function ItemsListController($log, $scope, ItemsService, ModalService) {
        $log.debug('in ItemsListController');

        ItemsService.getItems(function (items) {
            $scope.items = items;
        });

        $scope.orderProp = 'title';
        $scope.orderOptions = ['title', 'description', 'price', 'email'];

        $scope.showFavorites = function () {
            $log.debug('show favorites');
            ItemsService.syncFavorites($scope.items);
            ModalService.showModal({
                templateUrl: 'favorites-modal/favorites-modal.template.html',
                controller: 'FavoritesModalController'
            }).then(function (modal) {
                modal.element.modal();
                modal.close.then(function (result) {
                    $log.debug('closing pop-up');
                    // $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
                });
            }).catch(function (error) {
                // error contains a detailed error message.
                $log.error(error);
            });
        };

        $scope.toggle = function (id) {
            $log.debug(id);
            var index = $scope.items.map(function (item) {
                return item.id;
            }).indexOf(id);
            $scope.items[index].favorite = !!!$scope.items[index].favorite;
        };
    }

})();
    
