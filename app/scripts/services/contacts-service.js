'use strict';

angular.module('angularContactsListApp')
  .service('ContactsService', function ContactsService(OfflineModel, listContacts) {

    // AngularJS will instantiate a singleton by calling "new" on this function
    var Contacts = OfflineModel.init('listContacts', listContacts);

    /**
     * Table fields
     *
     * @type {Array}
     */
    var contactFields = ['_id', 'name' , 'address' , 'phone'];

    Contacts.setFields(contactFields);

    return Contacts;
  });
