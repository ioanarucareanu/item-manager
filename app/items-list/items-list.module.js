'use strict';

(function () {
    // Define the `itemsList` module
    angular.module('itemsList',
        ['core.items', 'angularUtils.directives.dirPagination', 'angularModalService', 'favoritesModal', 'itemsDirectives']
    );
})();
