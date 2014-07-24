'use strict';

angular.module('angularContactsListApp')
  .filter('startFrom', function () {
    return function(input, start) {
      start = +start; //parse to int
      return (typeof input === 'object' && input.length > 0 ) ? input.slice(start) : [];
    };
  });
