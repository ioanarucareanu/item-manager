'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemsList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Items', '$log',
      function PhoneListController(Items, $log) {
        $log.debug('before loading items');
        var self = this;
        Items.query(function(data) {
          self.phones = data.items;
        });
        self.orderProp = 'age';
      }
    ]
  });
