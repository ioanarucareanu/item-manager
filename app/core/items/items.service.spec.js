'use strict';

(function () {

  describe('ItemsService', function () {
    var $httpBackend;
    var ItemsService;
    var itemsData = {
      'items': [
        {title: 'Item0', description: 'Description0', price: 'Price0', email: 'Email0', image: 'Img0'},
        {title: 'Item1', description: 'Description1', price: 'Price1', email: 'Email1', image: 'Img1'},
        {title: 'Item2', description: 'Description2', price: 'Price2', email: 'Email2', image: 'Img2'}
      ]
    };

    // Add a custom equality tester before each test
    beforeEach(function () {
      jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Items` service before each test
    beforeEach(module('core.items'));
    //
    // // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function (_$httpBackend_, _ItemsService_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/items.json').respond(itemsData);

      ItemsService = _ItemsService_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the items data from `/data/items.json`, generate `id` and set `favorite` to false', function () {
      ItemsService.getItems(function (items) {
        var expectedItems = itemsData.items;
        expect(items.length).toBe(expectedItems.length);
        for (var i = 0; i < expectedItems.length; i++) {
          expect(items[i].id).toBeDefined();
          expect(items[i].favorite).toBe(false);
          expect(items[i].title).toBe('Item' + i);
          expect(items[i].description).toBe('Description' + i);
          expect(items[i].email).toBe('Email' + i);
          expect(items[i].image).toBe('Img' + i);
        }
      });
      $httpBackend.flush();
    });

    it('should return as favorites all the items with `favorite` false', function () {

      ItemsService.getItems(function (data) {
        //Set some favorite flags. 
        itemsData.items[0].id = data[0].id;
        itemsData.items[0].favorite = true;
        itemsData.items[1].id = data[1].id;
        itemsData.items[1].favorite = false;
        itemsData.items[2].id = data[2].id;
        itemsData.items[2].favorite = true;

        ItemsService.syncFavorites(itemsData.items);

        ItemsService.getFavorites(function (items) {
          expect(items.length).toBe(2);
          expect(items[0].id).toBe(itemsData.items[0].id);
          expect(items[1].id).toBe(itemsData.items[2].id);
        });

      });
      $httpBackend.flush();
    });

  });
})();
