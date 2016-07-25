'use strict';

(function () {
// Register `favoritesModal` component, along with its associated controller and template
    angular.module('favoritesModal').controller('FavoritesModalController', ['$log', '$scope', 'ItemsService', FavoritesModalController]);

    function FavoritesModalController($log, $scope, ItemsService) {
        $log.debug('in Favorites Controller');
        $scope.items = [];
        ItemsService.getFavorites(function (data) {
            $scope.items = data;
            $log.debug($scope.items);
        });

        $scope.unFavorite = function (id) {
            $log.debug('unfavoriting ' + id);
            ItemsService.unFavorite(id);
            var index = $scope.items.map(function (item) {
                return item.id;
            }).indexOf(id);
            $scope.items.splice(index, 1);
        }
    }
})();
