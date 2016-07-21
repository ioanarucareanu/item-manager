'use strict';

angular.
  module('core.items').
  factory('Items', ['$resource',
    function($resource) {
      return $resource('data/items.json', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ]);
