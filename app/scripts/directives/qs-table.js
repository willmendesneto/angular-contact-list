'use strict';

angular.module('angularContactsListApp')
  .directive('qsTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/qs-table.html'
    };
  });
