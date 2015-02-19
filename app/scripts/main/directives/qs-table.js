'use strict';

angular.module('angularContactsListApp')
  .directive('qsTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/main/views/directives/qs-table.html'
    };
  });
