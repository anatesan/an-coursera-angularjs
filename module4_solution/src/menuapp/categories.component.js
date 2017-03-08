(function() {
  'use strict';

  angular.module('MenuApp')
  .component('categoriesList', {
    templateUrl: 'src/menuapp/templates/categories.component.template.html',
    bindings: {
      categories: '<',
      categoriesTitle: '@',
      uiSrefString: '@'
    }
  })
})();
