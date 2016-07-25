'use strict';

'use strict';

(function () {
  angular.module('core.items').factory('ItemsService', ['$resource', '$log', 'uuid2', ItemsService]);

  function ItemsService($resource, $log, uuid2) {
    var items = [];
    return {
      /**
       * Returns the items. First time when it is called, it will load the data from a .json file,
       * generate unique ids and set `favorite` for all the items to false.
       * Called again, this function will return the previously loaded items.
       *
       * @param callback - callback function to be called once the items were loaded
       * @returns {Array} the array of items
         */
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

        /**
         * Iterates through the items array and based on the `favorite` flag value to determine the favorites.
         * In case the items array has not been loaded before, it is now. A callback function is used
         * to return the favorites' array.
         * @param callback - callback function to be called once the items were loaded
         * @returns {*}
         */
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

      /**
       * Unfavorites the item whose id was provided and updated the items array.
       * @param id - the id of the item to be unfavorited
         */
      unFavorite: function (id) {
        var index = items.map(function (item) {
          return item.id;
        }).indexOf(id);
        items[index].favorite = false;
      }
    }
  }
})();

function filterFavorites(items) {
  var favorites = items.filter(function (item) {
    return item.favorite === true;
  });
  return favorites;
}
