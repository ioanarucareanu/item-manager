'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
  module('itemsList').
  component('itemsList', {
    templateUrl: 'items-list/items-list.template.html',
    controller: ['Items', '$log', 'uuid2', '$location',
      function ItemsListController(Items, $log, uuid2, $location) {
        $log.debug('in Items List Controller');
        var self = this;
        Items.query(function(data) {
          data.items.map(function (item) {
            item.id = uuid2.newuuid();
            item.favorite = false;
            item.imageUrl = '/data/' + item.image;
          });
          self.items = data.items;
          $log.debug(self.items);
        });
        self.orderProp = 'title';
        self.orderOptions = ['title', 'description', 'price', 'email'];

        self.toggle = function (item) {
          $log.debug(item.id);

          // Update items-list view
          // var foundItem = self.items[ItemsUtils.findItemIndex(self.items, item.id)];
          // foundItem.favorite = !!!foundItem.favorite;
        };

        self.showFavorites = function() {
          $location.path('/items/favorites');
          // var modal = $uibModal.open({
          //   // templateUrl: "<favorites-modal></favorites-modal>",
          //   templateUrl: 'favorites-modal/favorites-modal.template.html',
          //   scope: { /* custom scope */ }
          // });
          $log.debug('show Favorites');
        }
      }
    ]
  });
