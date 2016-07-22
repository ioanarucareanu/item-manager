'use strict';

angular.
  module('core.favorites').
  service('Favorites', [
    function() {
      var self = this;
      self.items = [];
      self.add = function (item) {
          self.items.push(item);
      };
      self.remove = function (id) {
          
      };
    }
  ]);
