(function(){

  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    //redirect to Home Page if no matching urlRouterProvider
    $urlRouterProvider.otherwise('/');

    //define UI States
    $stateProvider

    //Home Page
    .state('home', {
      url: '/',
      templateUrl: "src/menuapp/templates/home.view.template.html",
    })

    //Categories
    .state('categories', {
      url:'/categories',
      templateUrl: "src/menuapp/templates/categories.view.template.html",
      controller: 'CategoriesViewController as cvCtrl',
      resolve: {
        categoriesPromise: ['MenuDataService', function(MenuDataService) {
          console.log("In categories resolve");
          return MenuDataService.getAllCategories();
        }]
      }
    })

    //items
    .state('categories.items', {
      url: '/items/{category}',
      templateUrl: "src/menuapp/templates/items.view.template.html",
      controller: 'ItemsViewController as ivCtrl',
      resolve: {
        itemsPromise: ['MenuDataService', '$stateParams',
          function(MenuDataService, $stateParams) {
            console.log("In items resolve");
            return MenuDataService.getItemsForCategory($stateParams.category);
          }
        ],
        selectedCategory: ['$stateParams', function($stateParams){
          return $stateParams.category;
        }]
      }
    })
  }
})();
