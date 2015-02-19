'use strict';

/**
 * @ngdoc directives
 * @name navbar
 * @id directives
 * @description This is a dummy directive.
 *
 * @param {string} apText Sample text.
 *
 * ###Additional information
 * You can write something else if you want.
 */
angular.module('angularContactsListApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/commons/views/directives/navbar.html',
      controller: 'NavbarCtrl',
      controllerAs: 'navbarCtrl',
    };
  });
