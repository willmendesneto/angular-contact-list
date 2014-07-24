'use strict';

angular.module('angularContactsListApp', [
  'ngRoute',
  'keepr'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts/index.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'views/contacts/new.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/:id/edit', {
        templateUrl: 'views/contacts/edit.html',
        controller: 'ContactsCtrl',
        method: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
