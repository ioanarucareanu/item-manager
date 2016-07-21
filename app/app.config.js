'use strict';

(function () {
    angular.
      module('itemManager').
      config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');
          console.log('in config');
          $routeProvider.
            when('/phones', {
              template: '<items-list></items-list>'
            }).
            when('/phones/:phoneId', {
              template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');
        }
      ]);

})();