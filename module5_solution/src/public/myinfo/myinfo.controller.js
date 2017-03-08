(function(){

  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserInfoService'];
  function MyInfoController(UserInfoService) {
    var infoCtrl = this;
    this.atleastOneSearchDone = false;
    this.search = function(searchKey) {
      var user = UserInfoService.getUser(searchKey);
      if (user == null) {
        this.noItemFound = true;
      }
      else {
        this.noItemFound = false;
        this.user = user;
      }
      this.atleastOneSearchDone = true;
    }
  }

})();
