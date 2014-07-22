'use strict';

describe('Directive: qsPagination', function () {

  // load the directive's module
  beforeEach(module('questradeApp'));

  var element,
    template,
    httpBackend,
    scope;

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {

    httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    scope.currentPage = 0;
    scope.pageSize = 2;
    scope.listContacts = [
      {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933'},
      {_id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933'},
      {_id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933'},
      {_id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
      {_id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933'},
      {_id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933'}
    ];
    scope.numberOfPages = function(){
      return 3;
    };
    template = '<div data-ng-show="numberOfPages() > 1">' +
  '<button ng-disabled="currentPage === 0" ng-click="currentPage=currentPage-1" class="btn btn-primary btn-outline">' +
      'Previous' +
  '</button>' +
  '{{currentPage+1}}/{{numberOfPages()}}' +
  '<button ng-disabled="currentPage >= numberOfPages() - 1" ng-click="currentPage=currentPage+1" class="btn btn-primary btn-outline">' +
      'Next' +
  '</button>' +
'</div>';
    httpBackend.whenGET('views/directives/qs-pagination.html').respond(template);

    element = $compile('<qs-pagination></qs-pagination>')(scope);
    scope.$digest();
  }));

  it('should have a qs-focus defined', function() {
    expect(element).toBeDefined();
  });
});
