'use strict';

angular.module('questradeApp')
  .directive('qsPagination', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/qs-pagination.html'
    };
  });
