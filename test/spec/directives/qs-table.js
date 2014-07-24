'use strict';

describe('Directive: qsTable', function () {

  // load the directive's module
  beforeEach(module('angularContactsListApp'));

  var element,
    template,
    httpBackend,
    scope;

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {

    httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    scope.reverse = false;
    scope.predicate = 'name';
    scope.listContacts = [
      {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933'},
      {_id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933'},
      {_id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933'},
      {_id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
      {_id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933'},
      {_id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933'}
    ];
    template = '<table class="table table-bordered table-responsive table-striped table-hover" >' +
  '<thead>' +
  '  <tr>' +
  '    <th class="contact-table-order col-lg-3" data-ng-class="{asc: reverse === true && predicate === \'name\', desc: reverse === false && predicate === \'name\'}" data-ng-click="predicate = \'name\'; reverse=!reverse; ">Name</th>' +
  '    <th class="col-lg-2">Actions</th>' +
  '  </tr>' +
  '</thead>' +
  '<tbody>' +
  '  <tr data-ng-repeat="item in filteredData = (listContacts | orderBy:predicate:reverse | filter:search) | startFrom:currentPage*pageSize | limitTo:pageSize track by $index">' +
  '    <td>{{item.name}}</td>' +
  '    <td>' +
  '      <button class="btn btn-primary btn-outline" data-ng-click="edit(item._id);" ><span class="hidden-xs">EDIT</span><span class="visible-xs">✔</span></button>' +
  '      <button class="btn btn-danger btn-outline" data-ng-click="delete(item._id);" ><span class="hidden-xs">DELETE</span><span class="visible-xs">✖</span></button>' +
  '    </td>' +
  '  </tr>' +
  '</tbody>' +
'</table>';
    httpBackend.whenGET('views/directives/qs-table.html').respond(template);
    element = $compile('<qs-table></qs-table>')(scope);
    scope.$digest();
  }));

  it('should have a qs-focus defined', function() {
    expect(element).toBeDefined();
  });
});
