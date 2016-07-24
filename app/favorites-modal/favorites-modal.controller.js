'use strict';

// Register `favoritesModal` component, along with its associated controller and template
angular.
  module('favoritesModal').
    controller('FavoritesModalController', ['$log', '$scope', 'ItemsService', FavoritesModalController]);

function FavoritesModalController($log, $scope, ItemsService) {
    $log.debug('in Favorites Controller');
    ItemsService.getFavorites(function(data) {
        $log.debug('callback getFavorites');
        $scope.items = data;
        $log.debug($scope.items);
    });
}
