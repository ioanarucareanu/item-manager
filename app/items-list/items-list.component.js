'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemsList').
  component('itemsList', {
    templateUrl: 'items-list/items-list.template.html',
    controller: ['Items', '$log',
      function PhoneListController(Items, $log) {
        var self = this;
        Items.query(function(data) {
          self.items = data.items;
          $log.debug(self.items);
        });
        self.orderProp = 'age';
      }
    ]
  });
