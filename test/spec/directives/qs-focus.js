'use strict';

describe('Directive: qsFocus', function () {

  // load the directive's module
  beforeEach(module('angularContactsListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {

    scope = $rootScope.$new();
    scope.x = '1234567890xpto';
    element = $compile('<input qs-focus type="number" placeholder="_" ng-model="x" required></input>')(scope);
    scope.$digest();
  }));

  it('should have a qs-focus defined', function() {
    expect(element).toBeDefined();
  });
});
