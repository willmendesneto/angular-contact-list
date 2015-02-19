'use strict';

angular.module('angularContactsListApp')
  .directive('qsPagination', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/main/views/directives/qs-pagination.html'
    };
  });
