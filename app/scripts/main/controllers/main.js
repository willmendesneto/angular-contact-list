/* globals confirm */
(function() {
  'use strict';

  function MainCtrl($scope, $filter, AlertService, ContactsService) {

    /**
     * Initial value of form
     *
     * @type {Array}
     */
    this.contact = [];

    /**
     * Order by verification for template
     * @type {Boolean}
     */
    this.reverse = false;

    /**
     * field used for table ordenation
     * @type {String}
     */
    this.predicate = 'name';

    /**
     * Limit to initial value
     * @type {Number}
     */
    this.currentPage = 0;

    /**
     * Page quantity for data visualization
     * @type {Number}
     */
    this.pageSize = 10;

    /**
     * Reset the form values
     */
    this.reset = function() {
      this.contact = {
        name: '',
        address: '',
        phone: ''
      };
    };

    /**
     * Returns the number page based in params
     * @return {[type]} [description]
     */
    this.numberOfPages = function(){
      return Math.ceil(this.listContacts.length/this.pageSize);
    };

    /**
     * Add a listContacts in this.listContacts
     */
    this.create = function(contact){
      this.listContacts = ContactsService.create(contact);
      AlertService.add('success', 'Contact "' + contact.name + '" created with success!', 5000);
    };

    /**
     * Editing a individual contact
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    this.edit = function(key){
      this.contact = $filter('filter')(this.listContacts, {_id: key})[0];
      window.scrollTo(0, 0);
    };

    /**
     * Update item
     * @param  {Object} item [description]
     * @return {[type]}      [description]
     */
    this.update = function( item ) {
      this.listContacts = ContactsService.update(item);
      AlertService.add('success', 'Contact "' + item.name + '" updated with success!', 5000);
    };

    /**
     * Add/edit method abstration
     * @param  {Object} item [description]
     * @return {[type]}      [description]
     */
    this.save = function(item){
      if(typeof item._id !== 'undefined'){
        this.update(item);
      } else {
        this.create(item);
      }
      this.reset();
    };

    /**
     * [delete description]
     * @param  {Integer} index        [description]
     * @param  {Boolean} confirmation [description]
     * @return {Boolean}              [description]
     */
    this.delete = function( index, confirmation ){
      confirmation = (typeof confirmation !== 'undefined') ? confirmation : true;
      if (confirmDelete(confirmation)) {
        var message,
            item = ContactsService.delete(index);
        if (!!item) {
          message = 'Contact "' + item.name + '" with id "' + item._id+ '" was removed of your contact\'s list';
          AlertService.add('success', message, 5000);
          this.listContacts = ContactsService.getListItems();
          return true;
        }
        AlertService.add('error', 'Houston, we have a problem. This operation cannot be executed correctly.', 5000);
        return false;
      }
    };

    /**
     * Method for access "window.confirm" function
     * @param  {Boolean} confirmation [description]
     * @return {Boolean}              [description]
     */
    var confirmDelete = function(confirmation){
      return confirmation ? confirm('This action is irreversible. Do you want to delete this contact?') : true;
    };

    /**
     * Method for class initialization
     * @return {[type]} [description]
     */
    this.init = function(){
      this.listContacts = this.filteredData = ContactsService.getListItems();
      this.reset();
    };

    this.init();

  }

  angular.module('angularContactsListApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$filter', 'AlertService', 'ContactsService'];

}());