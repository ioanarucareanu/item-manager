'use strict';

angular.
  module('core.items').
  factory('ItemsService', ['$resource',
    function($resource) {
      return $resource('data/items.json', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ]);
