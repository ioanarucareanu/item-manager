'use strict';

describe('Items', function() {
  var $httpBackend;
  var Items;
  var itemsData = {
      'items': [
        {name: 'Phone X'},
        {name: 'Phone Y'},
        {name: 'Phone Z'}
      ]
  };

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Items` service before each test
  beforeEach(module('core.items'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Items_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/items.json').respond(itemsData);

    Items = _Items_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the items data from `/data/items.json`', function() {
    var items = Items.query();

    // expect(items).toEqual([]);

    $httpBackend.flush();
    expect(items).toEqual(itemsData);
  });

});
