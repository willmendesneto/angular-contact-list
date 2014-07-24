'use strict';

describe('Service: listContacts', function () {

  // load the service's module
  beforeEach(module('angularContactsListApp'));

  // instantiate service
  var listContacts;
  beforeEach(inject(function (_listContacts_) {
    listContacts = _listContacts_;
  }));

  it('listContacts have to be created with 6 elements', function () {
    expect(!!listContacts).toBe(true);
    expect(listContacts.length).toEqual(6);
  });

});
