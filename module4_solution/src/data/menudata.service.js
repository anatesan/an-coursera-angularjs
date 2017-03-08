// menudata.service.js
(function(){
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'APIBasePath'];
  function MenuDataService($http, APIBasePath) {
    var service = this;

    //returns promise
    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: (APIBasePath + '/categories.json')
      });
    }

    //returns promise
    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: (APIBasePath + '/menu_items.json'),
        params: {
          category: categoryShortName
        }
      })
    }
  }
}
)();
