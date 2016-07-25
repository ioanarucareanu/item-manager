'use strict';

(function () {

    angular.module('itemsDirectives').directive('itemRow', ['$log', itemRow]);

    function itemRow($log) {
        var directive = {
            restrict: 'EA',
            scope: {
                id: '=',
                title: '=',
                description: '=',
                price: '=',
                email: '=',
                image: '=',
                favorite: '='
            },

            templateUrl: 'directives/item.directive.html',
            controller: ['$log', ItemRowDirectiveController]
        };

        return directive;
    }

    function ItemRowDirectiveController($log) {
        $log.debug('in ItemRowDirectiveController');
    }
})();