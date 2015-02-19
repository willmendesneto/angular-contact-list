/* globals confirm */
(function() {
  'use strict';

  function ContactsCtrl($scope, $rootScope, $location, $routeParams, $route, $filter, AlertService, ContactsService) {

    this.AlertService = AlertService;

    this.alerts = $rootScope.alerts;

    /**
     * Initial value of form
     *
     * @type {Array}
     */
    this.contact = [];

    /**
     * Reset the form values
     */
    this.reset = function() {
      this.contact = [
        {
          name: '',
          address: '',
          phone: ''
        }
      ];
    };

    /**
     * Add a listContacts in this.listContacts
     */
    this.create = function(contact){
      this.listContacts = ContactsService.create(contact);
      this.AlertService.add('success', 'Contact "' + contact.name + '" created with success!', 5000);
    };

    /**
     * Editing a individual contact
     * @return {[type]}     [description]
     */
    this.edit = function(){
      var id = $routeParams.id;
      this.contact = $filter('filter')(this.listContacts, {_id: id})[0];
      window.scrollTo(0, 0);
    };

    /**
     * Update item
     * @param  {Object} item [description]
     * @return {[type]}      [description]
     */
    this.update = function( item ) {
      this.listContacts = ContactsService.update(item);
      this.AlertService.add('success', 'Contact "' + item.name + '" updated with success!', 5000);
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
      $location.path('/contacts');
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
          message = 'Contact "' + item.name + '" was removed of your contact\'s list';
          this.AlertService.add('success', message, 5000);
          this.listContacts = ContactsService.getListItems();
          return true;
        }
        this.AlertService.add('error', 'Houston, we have a problem. This operation cannot be executed correctly.', 5000);
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
      //  Calling routeParam method
      if ($route.current.method !== undefined) {
        this[$route.current.method]();
      }
    };

    this.init();

  }

  angular.module('angularContactsListApp')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$rootScope', '$location', '$routeParams', '$route', '$filter', 'AlertService', 'ContactsService'];

}());