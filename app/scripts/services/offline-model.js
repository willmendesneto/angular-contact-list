'use strict';

angular.module('angularContactsListApp')
  .factory('OfflineModel', function OfflineModel($filter, CryptoOfflineStorageService) {

    // Service logic
    // ...

    var _key = null,
        _DB = null,
        _items = null,
        _fields = null
    ;

    // Public API here
    return {
      _secret: 'angularContactsListApp',
      init: function (key, _items, params) {

        var self = this;
        _key = key;

        CryptoOfflineStorageService.init({secret: self._secret});
        _DB = CryptoOfflineStorageService.get(_key);
        if (!_DB){
          CryptoOfflineStorageService.set(_key, _items);
          _DB = _items;
        }
        self.setListItems(_DB);

        //  Extend params for create a factory in service
        return angular.extend(self, params || {});
      },
      createValueObject: function(item) {
        var obj = {};
        angular.forEach( _fields, function( field ) {
          obj[field] = item[field] || '';
        });
        return obj;
      },
      setKey: function(key){
        _key = key;
        return this;
      },
      getKey: function(){
        return _key;
      },
      setListItems: function(items){
        _items = items;
        return this;
      },
      getListItems: function(){
        return _items;
      },
      setFields: function(fields){
        _fields = fields;
        return this;
      },
      getDB: function(){
        return _DB;
      },
      countTotalItems: function(items) {
        return ($filter('max')(items, '_id') || 0) + 1;
      },
      create: function (item) {
        item = this.createValueObject(item);
        item._id = this.countTotalItems(_items);
        _items.push(item);
        CryptoOfflineStorageService.set(_key, _items);
        return _items;
      },
      update: function (item) {
        _items = _items.map( function (element) {
          if ( element._id === item._id){
            element = item;
          }
          return element;
        });
        CryptoOfflineStorageService.set(_key, _items);
        return _items;
      },
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
    };

  });
