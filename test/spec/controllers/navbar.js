'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularContactsListApp'));

  var NavbarCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));

  describe('isActive', function(){

    it('should return "true" when paths are the same', function () {
      location.path('/');
      expect(scope.isActive('/')).toBeTruthy();
    });

    it('should return "false" when paths aren\'t the same', function () {
      location.path('/');
      expect(scope.isActive('/error')).toBeFalsy();
    });

    it('should return "true" when word starts are the same', function () {
      location.path('/contacts/1/edit');
      expect(scope.isActive('/contacts')).toBeTruthy();
    });

    it('should return "true" when word starts are the same followed by query string', function () {
      location.path('/contacts?id=1');
      expect(scope.isActive('/contacts')).toBeTruthy();
    });

  });
});
