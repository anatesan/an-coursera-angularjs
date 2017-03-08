(function(){
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {

    // // test prop to make sure controller seen in index.html
    // $scope.ToByController = "ToBuyController";

    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.getToByList();
    toBuy.toMarkBoughtIndexList =
      ShoppingListCheckOffService.getBoughtIndexList();

    // expose function to be invoked on click
    toBuy.itemBought = ShoppingListCheckOffService.itemBought;
    toBuy.getCountOfItemsBought = ShoppingListCheckOffService.getCountOfItemsBought;
    toBuy.isEverythingBought = ShoppingListCheckOffService.isEverythingBought;

  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {

    // // test prop to make sure controller seen in index.html
    // $scope.AlreadyBoughtController = "AlreadyBoughtController";

    var alreadyBought = this;
    alreadyBought.alreadyBoughtList =
      ShoppingListCheckOffService.getAlreadyBoughtList();

    alreadyBought.getCountOfItemsBought =
      ShoppingListCheckOffService.getCountOfItemsBought;

    alreadyBought.isEverythingBought = ShoppingListCheckOffService.isEverythingBought;

  }

  function ShoppingListCheckOffService() {

    var service = this;

    var toBuyList = ["10 Cookies", "20 Sodas",  "25 Bhel Puris"];
    var alreadyBoughtList = [];

    // keep track of what has been bought so we can show it as bought
    var boughtIndexList = [];
    for (var i=0; i<toBuyList.length; i++) {
      boughtIndexList[i] = false;
    }

    // getters
    service.getToByList = function () {
      return toBuyList;
    }

    service.getBoughtIndexList = function getBoughtIndexList() {
      // index in getToByList
      return boughtIndexList;
    }

    service.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
    }

    service.getCountOfItemsBought = function () {
      var count = 0;
      for (var i=0; i<boughtIndexList.length; i++) {
        if (boughtIndexList[i] == true) {
          count++;
        }
      }
      return count;
    }

    service.isEverythingBought = function () {
      var boughtItemCount = this.getCountOfItemsBought();
      return  boughtItemCount == toBuyList.length;
    }

    // business logic when bought button clicked.

    service.itemBought = function (toBuyItemIndex) {
      var item = toBuyList[toBuyItemIndex];

      // if item has already been marked - do nothing
      if (alreadyBoughtList.indexOf(item) == -1) {
        alreadyBoughtList.push(item);
        boughtIndexList[toBuyItemIndex] = true;
      }


    }
  }
})();
