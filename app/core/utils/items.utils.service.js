'use strict';

angular.
  module('core.utils').
  service('ItemsUtils', [
    function() {
      var self = this;
      self.findItemIndex = function (items, id) {
        return items.map(function(x) {
          return x.id;
        }).indexOf(id);
      };
      self.findItemById = function (items, id) {
        return items[self.findItemIndex(id)];
      }
    }
  ]);
