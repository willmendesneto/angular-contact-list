'use strict';

describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularContactsListApp'));

  var ContactsCtrl,
    opts,
    route,
    routeParams,
    controller,
    listContactsKey,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route, $routeParams) {
    listContactsKey = 0;
    route = $route;
    controller = $controller;
    routeParams = $routeParams;
    opts = {
      contact: [
        {
          name: '',
          address: '',
          phone: ''
        }
      ],
      listContacts: [
        {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 102', phone: '557188339931'},
        {_id: 2, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 103', phone: '557188339932'},
        {_id: 3, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
        {_id: 4, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 105', phone: '557188339934'},
        {_id: 5, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339935'},
        {_id: 6, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 107', phone: '557188339936'}
      ],
    };
    scope = $rootScope.$new();

    route = {
      current: {
        method: undefined
      }
    };

    ContactsCtrl = $controller('ContactsCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      $route: route
    });
  }));

  it('#reset', function () {
    scope.contact = opts.contact[listContactsKey];
    expect(scope.contact.name).toBe(opts.contact[listContactsKey].name);
    expect(scope.contact.address).toBe(opts.contact[listContactsKey].address);
    expect(scope.contact.phone).toBe(opts.contact[listContactsKey].phone);

    scope.reset();

    expect(scope.contact[listContactsKey].name).toBe('');
    expect(scope.contact[listContactsKey].address).toBe('');
    expect(scope.contact[listContactsKey].phone).toBe('');
  });

  it('#numberOfPages', function(){
    expect(scope.numberOfPages()).toEqual(1);
    scope.listContacts = [
        {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 102', phone: '557188339931'},
        {_id: 2, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 103', phone: '557188339932'},
        {_id: 3, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
        {_id: 4, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 105', phone: '557188339934'},
        {_id: 5, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339935'},
        {_id: 6, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 107', phone: '557188339936'},
        {_id: 7, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 108', phone: '557188339931'},
        {_id: 8, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 109', phone: '557188339932'},
        {_id: 9, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 110', phone: '557188339933'},
        {_id: 10, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 111', phone: '557188339934'},
        {_id: 11, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 112', phone: '557188339935'},
        {_id: 12, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 113', phone: '557188339936'}
      ];
    expect(scope.numberOfPages()).toEqual(2);
  });

  it('#create', function () {
    scope.contact = opts.contact;
    var listcontacthLength = scope.listContacts.length;
    expect(scope.listContacts.length).toBe(listcontacthLength);

    scope.create(opts.contact[listContactsKey]);
    expect(scope.listContacts.length).toBe(listcontacthLength + 1);
    scope.delete(7, false);
  });

  it('#edit', function () {
    routeParams.id = 1;
    route.current.method = 'edit';

    ContactsCtrl = controller('ContactsCtrl', {
      $scope: scope,
      $route: route,
      $routeParams: routeParams
    });

    scope.listContacts = opts.listContacts;
    scope.edit();
    expect(scope.contact.name).toBe(opts.listContacts[listContactsKey].name);
    expect(scope.contact.phone).toBe(opts.listContacts[listContactsKey].phone);
    expect(scope.contact.address).toBe(opts.listContacts[listContactsKey].address);
  });

  it('#update', function () {
    scope.edit(listContactsKey+1);

    var nameMock = 'Username test',
        addressMock = 'User address',
        phoneMock = 'User phone'
    ;
    scope.contact.name = nameMock;
    scope.contact.phone = phoneMock;
    scope.contact.address = addressMock;

    scope.update(listContactsKey+1);

    expect(scope.listContacts[listContactsKey].name).toBe(nameMock);
    expect(scope.listContacts[listContactsKey].address).toBe(addressMock);
    expect(scope.listContacts[listContactsKey].phone).toBe(phoneMock);

    expect(scope.contact.name).toBe(nameMock);
    expect(scope.contact.address).toBe(addressMock);
    expect(scope.contact.phone).toBe(phoneMock);

    scope.contact.name = 'Allan Benjamin';
    scope.contact.phone = '557188339933';
    scope.contact.address = 'St. Claire Avenue, Nº 101';

    scope.update(listContactsKey+1);
  });

  it('#delete', function () {
    var listLength = scope.listContacts.length;
    var returnDelete = scope.delete(scope.listContacts.length - 1, false);
    expect(returnDelete).toBe(true);

    expect(typeof scope.listContacts[listLength] === 'undefined').toBe(true);
    expect(scope.listContacts.length !== listLength).toBe(true);

  });

});

