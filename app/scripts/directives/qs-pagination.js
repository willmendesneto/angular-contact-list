'use strict';

angular.module('angularContactsListApp')
  .directive('qsPagination', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/qs-pagination.html'
    };
  });
