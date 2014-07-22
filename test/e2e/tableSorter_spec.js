'use strict';

describe('contact tableSorter application', function () {

  var tableSorter;

  it('changes active table order based in user\'s choice', function () {

    browser.get('/');

    element.all(by.css('.contact-table-order')).then(function(items) {

      expect(items.length).toBe(1);

      //  Testing all elements with ordenation method
      ['Name'].forEach(function(text, key){

        describe('Testing Item "'+text+'"', function(){
          //  Order Asc
          it('ASC ordenation', function () {
            expect(items[key].getText()).toBe(text);
            items[key].click();
            tableSorter = element(by.css('.contact-table-order.asc'));
            expect(tableSorter.getText()).toEqual(text);
          });
          //  Order Desc
          it('DESC ordenation', function () {
            items[key].click();
            tableSorter = element(by.css('.contact-table-order.desc'));
            expect(tableSorter.getText()).toEqual(text);
          });
        });
      });
    });
  });

});
