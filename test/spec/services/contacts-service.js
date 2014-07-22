'use strict';

describe('Service: ContactsService', function () {

  // load the service's module
  beforeEach(module('questradeApp'));

  // instantiate service
  var ContactsService,
      myMock
  ;
  beforeEach(inject(function (_ContactsService_) {
    ContactsService = _ContactsService_;
    myMock = [
      {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933'},
      {_id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933'},
      {_id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933'},
      {_id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
      {_id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933'},
      {_id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933'}
    ];
  }));

  it('Testing initial informations', function () {
    expect(typeof ContactsService.setListItems(myMock) === 'object').toBe(true);
    expect(ContactsService.getListItems().length).toEqual(6);
  });

  it('#delete', function(){
    var items = ContactsService.delete(1);
    expect(typeof items === 'object').toBe(true);

    expect(items._id).toBe(myMock[0]._id);
    expect(items.name).toBe(myMock[0].name);
    expect(items.address).toBe(myMock[0].address);
    expect(items.phone).toBe(myMock[0].phone);

    expect(ContactsService.delete(5000)).toBe(false);
  });

});
