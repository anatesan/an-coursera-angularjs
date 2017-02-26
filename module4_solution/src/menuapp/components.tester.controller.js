(function(){
  angular.module('MenuApp')
  .controller('ComponentsTesterController', ComponentsTesterController);

  // This is a test controller used only to validate the components we
  // created without also debugging the ui routing.  Note that this is used
  // as the Controller on the main page, not the components being tested

  ComponentsTesterController.$inject=['$q', 'MenuDataService'];
  function ComponentsTesterController($q, MenuDataService) {
    var tctrl = this;

    var categoriesPromise = MenuDataService.getAllCategories();
    var itemsPromise = MenuDataService.getItemsForCategory('L');
    $q.all([categoriesPromise, itemsPromise])
    .then(function(mergedSucessfulPromise){
      tctrl.categories = mergedSucessfulPromise[0].data;
      tctrl.items = mergedSucessfulPromise[1].data.menu_items;
      return true;
    },
    function(errorPromise) {
      console.log("Test call failed, promise error:", errorPromise)
    });

    tctrl.ifTestComponentsInline = function() {
      return false;
    }
  }
})();
