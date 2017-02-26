(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesViewController', CategoriesViewController);

CategoriesViewController.$inject = ['categoriesPromise'];
function CategoriesViewController(categoriesPromise){
  var cvCtrl = this;

  cvCtrl.categories = categoriesPromise.data;
  console.log("In CategoriesViewController. categories: ", cvCtrl.categories);

}

})();
