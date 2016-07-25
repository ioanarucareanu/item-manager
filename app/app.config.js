'use strict';

(function () {
    angular.
      module('itemManager').
        config(['$stateProvider' ,'$urlRouterProvider', '$logProvider',
          function config($stateProvider, $urlRouterProvider, $logProvider) {
            $logProvider.debugEnabled(false);
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