'use strict';

// Register `favoritesModal` component, along with its associated controller and template
angular.
  module('favoritesModal', []).
  component('favoritesModal', {
    templateUrl: 'favorites-modal/favorites-modal.template.html',
    controller: ['Items', '$log',
        function FavoritesController(Items, $log) {
          $log.debug('in Favorites Controller');
        }
    ]
  });
