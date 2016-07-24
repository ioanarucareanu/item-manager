'use strict';

(function () {
    angular.
      module('itemManager').
        config(['$stateProvider' ,'$urlRouterProvider',
          function config($stateProvider, $urlRouterProvider) {
            console.log('in config');
            $stateProvider
              .state('items', {
                url: '/items',
                templateUrl: 'items-list/items-list.template.html',
                controller: 'ItemsListController'
              });

            $urlRouterProvider.otherwise('/items');

          }
    ]);

})();