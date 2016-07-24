'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
  module('itemsList').
    controller('ItemsListController', ['$log', '$scope', 'uuid2', 'ItemsService', 'ModalService', ItemsListController]);

function ItemsListController($log, $scope, uuid2, ItemsService, ModalService) {
  $log.debug('in ItemsListController');

  ItemsService.query(function(data) {
    data.items.map(function (item) {
      item.id = uuid2.newuuid();
      item.favorite = false;
      item.imageUrl = '/data/' + item.image;
    });
    $scope.items = data.items;
    $log.debug($scope.items);
  });

  $scope.orderProp = 'title';
  $scope.orderOptions = ['title', 'description', 'price', 'email'];

  $scope.showFavorites = function () {
    $log.debug('show favorites');
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

  self.toggle = function (item) {
    $log.debug(item.id);

    // Update items-list view
    // var foundItem = self.items[ItemsUtils.findItemIndex(self.items, item.id)];
    // foundItem.favorite = !!!foundItem.favorite;
  };
}
    
