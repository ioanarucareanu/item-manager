'use strict';

angular.
  module('core.favorites').
  service('Favorites', [ '$log',
    function($log) {
      var self = this;
      self.items = [];
      self.add = function (item) {
          self.items.push(item);
      };
      self.remove = function (item) {
          var index = self.indexOf(item);
          self.items.splice(index, 1);
          $log.debug(self.items);
      };
      self.indexOf = function (item) {
       
      }
    }
  ]);
