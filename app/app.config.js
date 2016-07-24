'use strict';

(function () {
    angular.
      module('itemManager').
      config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');
          $routeProvider.
            when('/items', {
              template: '<items-list></items-list>'
            }).
            when('/items/favorites', {
              template: '<favorites-modal></favorites-modal>'
            }).
            otherwise('/items');
        }
      // ]);
    // config(['$stateProvider' ,'$urlRouterProvider',
    //   function config($stateProvider, $urlRouterProvider) {
    //       console.log("in config");
    //     $stateProvider
    //       .state('items', {
    //         url: 'items',
    //         template: '<items-list></items-list>'
    //       })
    //       .state('items.favorites', {
    //         url: 'items/favorites',
    //         template: '<favorites-modal></favorites-modal>'
    //       });
    //
    //     $urlRouterProvider.otherwise('/items');
    //
    //   }
    ]);

})();