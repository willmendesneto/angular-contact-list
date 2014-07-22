'use strict';

angular.module('questradeApp')
  .directive('qsTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/qs-table.html'
    };
  });
