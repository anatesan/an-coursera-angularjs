(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  //  This service returns a promise.
  service.isItemShortNameValidPromise = function(shortName) {
    var url;

    // if no shortName, favItem is invalid
    if (shortName) {
      url = ApiPath + '/menu_items/' + shortName + '.json';
    }
    else {
      console.log("empty URL!");
      throw new Error("empty URL!");
    }
    return $http.get(url);
  }
}



})();
