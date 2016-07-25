'use strict';

angular.
  module('core.items').
  factory('ItemsService', ['$resource', '$log', 'uuid2', ItemsService]);

function ItemsService($resource, $log, uuid2) {
  var items = [];
  return {
    getItems: function (callback) {
      callback = callback && typeof callback === 'function' ? callback : angular.noop;
      if (items.length > 0) {
        $log.debug('retrieving items');
        return callback(items);
      }
      $resource('data/items.json', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      }).query(function (data) {
        data.items.map(function (item) {
          item.id = uuid2.newuuid();
          item.favorite = false;
        });
        items = data.items;
        $log.debug('fetched ' + items.length + ' items');
        return callback(items);
      });
    },

    getFavorites: function (callback) {

      if (items.length == 0) {
        this.getItems(function () {
          return callback(filterFavorites(items));
        });
      }
      $log.debug('filtering favorites');
      return callback(filterFavorites(items));
    },

    syncFavorites: function (updatedItems) {

      $log.debug('syncing items');
      $log.debug(updatedItems);
      items = updatedItems;
    },

    unFavorite: function (id) {
      var index = items.map(function(item) {
        return item.id;
      }).indexOf(id);
      items[index].favorite = false;
    }
  }
}

function filterFavorites(items) {
  var favorites = items.filter(function (item) {
    return item.favorite === true;
  });
  return favorites;
}
