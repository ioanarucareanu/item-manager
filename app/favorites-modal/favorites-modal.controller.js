'use strict';

// Register `favoritesModal` component, along with its associated controller and template
angular.
  module('favoritesModal').
    controller('FavoritesModalController', ['$log', '$scope', 'ItemsService', FavoritesModalController]);

function FavoritesModalController($log, $scope, ItemsService) {
    $log.debug('in Favorites Controller');
    ItemsService.query(function(data) {
        $scope.items = data.items;
        $log.debug($scope.items);
    });
}
