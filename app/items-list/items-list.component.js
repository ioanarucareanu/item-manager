'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemsList', ['angularUtils.directives.dirPagination']).
  component('itemsList', {
    templateUrl: 'items-list/items-list.template.html',
    controller: ['Items', 'Favorites', '$log',
      function ItemsListController(Items, Favorites, $log) {
        var self = this;
        Items.query(function(data) {
          self.items = data.items;
          $log.debug(self.items);
        });
        self.orderProp = 'title';
        self.orderOptions = ['title', 'description', 'price', 'email'];
      }
    ]
  });
