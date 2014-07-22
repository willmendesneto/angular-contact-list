'use strict';

angular.module('questradeApp')
  .service('ContactsService', function ContactsService(OfflineModel, CryptoOfflineStorageService, listContacts) {

    // AngularJS will instantiate a singleton by calling "new" on this function
    var Contacts = OfflineModel.init('listContacts', listContacts, {
      delete: function(index) {
        var db = this.getDB();
        var _id = db.filter( function (element, pos) {
          if ( element._id === index){
            element.pos = pos;
            return element;
          }
        });

        if (_id.length > 0) {
          var item = db.splice(_id[0].pos, 1);
          if (typeof item[0] ===  'object') {
            this.setListItems(db);
            CryptoOfflineStorageService.set('listContacts', db);
            return item[0];
          }
        }
        return false;
      }
    });

    /**
     * Table fields
     *
     * @type {Array}
     */
    var contactFields = ['_id', 'name' , 'address' , 'phone'];

    Contacts.setFields(contactFields);

    return Contacts;
  });
