'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemsList', ['angularUtils.directives.dirPagination']).
  component('itemsList', {
    templateUrl: 'items-list/items-list.template.html',
    controller: ['Items', 'Favorites', 'ItemsUtils', '$log',
      function ItemsListController(Items, Favorites, ItemsUtils, $log) {
        var self = this;
        Items.query(function(data) {
          data.items.map(function (item, index) {
            item.id = index;
            item.favorite = false;
          });
          self.items = data.items;
          $log.debug(self.items);
        });
        self.orderProp = 'title';
        self.orderOptions = ['title', 'description', 'price', 'email'];

        self.toggle = function (item) {
          $log.debug(item.id);

          // Update items-list view
          var foundItem = self.items[ItemsUtils.findItemIndex(self.items, item.id)];
          foundItem.favorite = !!!foundItem.favorite;

        }
      }
    ]
  });
