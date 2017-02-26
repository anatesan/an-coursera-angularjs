(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsViewController', ItemsViewController);

ItemsViewController.$inject = ['itemsPromise', 'selectedCategory'];
function ItemsViewController(itemsPromise, selectedCategory){
  var ivCtrl = this;

  ivCtrl.items = itemsPromise.data.menu_items;
  ivCtrl.selectedCategory = selectedCategory;
  return true;

}

})();
