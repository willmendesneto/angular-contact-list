(function() {
  'use strict';

  angular.module('angularContactsListApp', [
    'ngRoute',
    'keepr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/chart', {
        templateUrl: 'scripts/chart/views/index.html',
        controller: 'ChartCtrl'
        // controllerAs: 'contactsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'scripts/contacts/views/index.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'scripts/contacts/views/new.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/contacts/:id/edit', {
        templateUrl: 'scripts/contacts/views/edit.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl',
        method: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
