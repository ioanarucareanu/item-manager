'use strict';

angular.module('itemsDirectives').
    directive('itemRow', ['$log', itemRow]);

function itemRow($log) {
    var directive = {
        restrict: 'EA',
        scope: {
            title: '='
        },

        templateUrl: 'directives/item.directive.html',
        controller: ['$log', ItemRowDirectiveController]
    };

    return directive;
}

function ItemRowDirectiveController($log) {
    $log.debug('in ItemRowDirectiveController');
}